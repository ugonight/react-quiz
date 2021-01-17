import React from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Alert
} from "react-bootstrap";

function Question(props) {
  return <div className="question">{props.value}</div>;
}

function Choices(props) {
  const choiceList = props.value;

  return (
    <ToggleButtonGroup type="radio" name="options" vertical className="choices">
      {choiceList.map((choice, idx) => (
        <ToggleButton
          key={idx}
          variant="outline-dark"
          className="choice mt-2"
          name="radio"
          value={idx}
          // checked={radioValue === idx}
          onChange={(e) => props.onChange(e.currentTarget.value)}
          disabled={props.disabled}
        >
          {choice}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

function Result(props) {
  var variant = props.isCorrect ? "success" : "danger";
  var headMsg = props.isCorrect ? "正解！" : "不正解！ｗ";

  return (
    <>
      <Alert variant={variant}>
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
      isAnswered: false
    };
  }

  changeInput(i) {
    this.setState({
      input: i
    });
  }

  render() {
    var file_json = require("./question01.json");

    return (
      <>
        <h1 className="header">{file_json.section}</h1>

        <Question value={file_json.questions[0].question} />

        <Choices
          value={file_json.questions[0].choices}
          onChange={(i) => this.changeInput(i)}
          disabled={this.state.isAnswered}
        />

        {this.state.isAnswered && (
          <Result
            isCorrect={this.state.input === file_json.questions[0].answer}
            commentary={file_json.questions[0].commentary}
          />
        )}

        <Button
          variant="primary"
          size="lg"
          block
          className="mt-4"
          onClick={(i) => this.setState({ isAnswered: true })}
          disabled={this.state.input == null}
        >
          決定
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
