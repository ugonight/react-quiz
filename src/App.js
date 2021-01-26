import React from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Alert,
  Collapse
} from "react-bootstrap";

function Question(props) {
  return <div className="question">{props.value}</div>;
}

function Choices(props) {
  const choiceList = props.value;

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
          if (props.type === "radio") {
            if (idx === props.answer) {
              variant = "success";
            } else if (idx === props.input) {
              variant = "danger";
            }
          } else if (props.type === "checkbox") {
            if (props.answer.includes(idx)) {
              variant = "success";
            } else if (props.input.includes(idx)) {
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

function Result(props) {
  var variant = props.isCorrect ? "success" : "danger";
  var headMsg = props.isCorrect ? "正解！" : "不正解！ｗ";

  return (
    <>
      <Alert variant={variant} show={props.show} transition={Collapse}>
        <Alert.Heading>{headMsg}</Alert.Heading>
        <hr />
        <p className="mb-0">{props.commentary}</p>
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

        <Choices
          value={this.question.choices}
          onChange={(i) => this.changeInput(i)}
          isAnswered={this.state.isAnswered}
          input={this.state.input}
          answer={this.question.answer}
          type={this.question.type}
        />

        <Result
          isCorrect={this.state.isCorrect}
          commentary={this.question.commentary}
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

function App() {
  return (
    <Container>
      <Game />
    </Container>
  );
}

export default App;
