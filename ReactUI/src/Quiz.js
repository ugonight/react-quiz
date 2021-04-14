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

function Question(props) {
  return <div className="question">{props.value}</div>;
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
  var inputEl;

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
        <p className="mb-0">{props.comment}</p>
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
      questionNum: 0
    };
    this.file_json = require("./question01.json");
    this.question = this.file_json.questions[this.state.questionNum];
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
          JSON.stringify(this.question.answer)
      });
    } else {
      // 次の問題へ

      var questionNum = this.state.questionNum + 1;
      if (questionNum >= this.file_json.questions.length) {
        questionNum = 0;
      }

      this.setState({
        input: null,
        isAnswered: false,
        questionNum: questionNum
      });
      this.question = this.file_json.questions[questionNum];
    }
  }

  render() {
    return (
      <>
        <h1 className="header">{this.file_json.section}</h1>

        <Question value={this.question.sentence} />

        <UserInput
          onChange={(i) => this.changeInput(i)}
          state={this.state}
          question={this.question}
        />

        <Result
          isCorrect={this.state.isCorrect}
          comment={this.question.comment}
          show={this.state.isAnswered}
        />

        <Button
          variant="primary"
          size="lg"
          block
          className="mt-4"
          onClick={(i) => this.clickOK(i)}
          disabled={this.state.input == null}
        >
          {this.state.isAnswered ? "次へ" : "決定"}
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
