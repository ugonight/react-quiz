import React from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Alert,
  Collapse,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
const gfm = require('remark-gfm');

var DEF = require("./define");
var Controller = require("./controller");

const md_components = {
  code({ node, className, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return match
      ? <SyntaxHighlighter language={match[1]} PreTag="div" style={vs} {...props} />
      : <code className={className} {...props} />
  }
}

function Question(props) {
  return (
    <div className="question">
      <ReactMarkdown remarkPlugins={[gfm]} components={md_components} className="line-break">
        {props.value}
      </ReactMarkdown>
    </div>);
}

function Choices(props) {
  const choiceList = props.choices;

  return (
    <ToggleButtonGroup
      type={props.type}
      name="options"
      vertical
      className="choices"
      value={props.input}
      onChange={props.onChange}
    >
      {choiceList.map((choice, idx) => {
        var variant = "outline-dark";
        // 回答後ならボタンの色を変える
        if (props.isAnswered) {
          var correct = false, select = false;

          // 一択
          if (props.type === "radio") {
            correct = (idx === props.answer);
            select = (idx === props.input);

            // 正解・選択
            if (correct && select) {
              variant = "success";
            }
            // 正解・未選択
            else if (correct) {
              variant = "warning";
            }
            // 不正解・選択
            else if (select) {
              variant = "danger";
            }
          }
          // 複数回答
          else if (props.type === "checkbox") {
            correct = (props.answer.includes(idx));
            select = (props.input.includes(idx));

            // 正解・選択
            if (correct && select) {
              variant = "success";
            }
            // 正解・未選択
            else if (correct) {
              variant = "warning";
            }
            // 不正解・選択
            else if (select) {
              variant = "danger";
            }
          }
        }

        return (
          <ToggleButton
            key={idx}
            variant={variant}
            className="choice mt-2"
            name="radio"
            value={idx}
            disabled={props.isAnswered}
          >
            {choice}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}

function TextBox(props) {
  var isWrong = props.isAnswered && props.input !== props.answer;

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">回答</InputGroup.Text>
      </InputGroup.Prepend>

      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(i) => props.onChange(i.target.value)}
        readOnly={props.isAnswered}
        isInvalid={isWrong}
        isValid={props.isAnswered && !isWrong}
      />
      {isWrong && <FormControl.Feedback type="invalid">
        {"答え: " + props.answer}
      </FormControl.Feedback>}

    </InputGroup>
  );
}

function UserInput(props) {
  var inputEl = <div />;

  var choices = props.question.choices;
  var onChange = props.onChange;
  var isAnswered = props.state.isAnswered;
  var input = props.state.input;
  var answer = props.question.answer;
  var type = props.question.type;

  if (type === "radio" || type === "checkbox") {
    inputEl = (
      <Choices
        choices={choices}
        onChange={onChange}
        isAnswered={isAnswered}
        input={input}
        answer={answer}
        type={type}
      />
    );
  } else if (type === "text") {
    inputEl = (
      <TextBox
        onChange={onChange}
        isAnswered={isAnswered}
        input={input}
        answer={answer}
        type={type}
      />
    );
  }

  return inputEl;
}

function Result(props) {
  var variant = props.isCorrect ? "success" : "danger";
  var headMsg = props.isCorrect ? "正解！" : "不正解！ｗ";

  return (
    <>
      <Alert variant={variant} show={props.show} transition={Collapse}>
        <Alert.Heading>{headMsg}</Alert.Heading>
        <hr />
        <p className="mb-0">
          <ReactMarkdown remarkPlugins={[gfm]} components={md_components} className="line-break">
            {props.comment}
          </ReactMarkdown>
        </p>
      </Alert>
    </>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      isAnswered: false,
      isCorrect: false,
      quesNumber: 0,
      question: {
        "sentence": "",
        "type": "",
        "choices": "",
        "answer": 0,
        "comment": ""
      },
      // クイズ読み込み中
      loadingQuiz: false
    };
  }

  componentDidMount() {
    Controller.getCurrentQuestion().then(data => {
      this.setState({ question: data.question, quesNumber: data.quesNumber });
    });
  }

  changeInput(i) {
    var input = i;

    // 配列はソートする
    if (Array.isArray(input)) {
      input.sort();
    }

    this.setState({
      input: input
    });
  }

  clickOK(e) {
    if (!this.state.isAnswered) {
      // 答え合わせ
      this.setState({
        isAnswered: true,
        isCorrect:
          JSON.stringify(this.state.input) ===
          JSON.stringify(this.state.question.answer)
      });
    } else {
      // 次の問題へ
      this.setState({ loadingQuiz: true });
      Controller.applyResult(this.state.isCorrect).then(data => {
        Controller.getCurrentQuestion().then(data => {
          this.setState({
            question: data.question,
            quesNumber: data.quesNumber,
            input: null,
            isAnswered: false,
            loadingQuiz: false
          });
        });
      });
    }
  }

  render() {
    return (
      <>
        <h1 className="header">{this.state.quesNumber + 1}問目</h1>

        <Question value={this.state.question.sentence} />

        <UserInput
          onChange={(i) => this.changeInput(i)}
          state={this.state}
          question={this.state.question}
        />

        <Result
          isCorrect={this.state.isCorrect}
          comment={this.state.question.comment}
          show={this.state.isAnswered}
        />

        <Button
          variant="primary"
          size="lg"
          block
          className="mt-4"
          onClick={(i) => this.clickOK(i)}
          disabled={this.state.input == null || this.state.loadingQuiz}
        >
          {this.state.isAnswered ? ( this.state.loadingQuiz ? "読み込み中…" : "次へ") : "決定"}
        </Button>
      </>
    );
  }
}

function Quiz() {
  return (
    <Container>
      <Game />
    </Container>
  );
}

export default Quiz;
