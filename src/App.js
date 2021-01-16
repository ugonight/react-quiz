import React from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button
} from "react-bootstrap";
import fs from "fs";

function Question(props) {
  return <div className="question">{props.value}</div>;
}

function Choices(props) {
  const choiceList = props.value; // ["選択肢1", "選択肢2", "選択肢3"];

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue={1}
      vertical
      className="choices"
    >
      {choiceList.map((choice, idx) => (
        <ToggleButton
          key={idx}
          variant="outline-dark"
          className="choice mt-2"
          name="radio"
          value={idx}
          // checked={radioValue === idx}
          onChange={(e) => props.onChange(e.currentTarget.value)}
        >
          {choice}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0
    };
  }

  changeInput(i) {
    this.setState({
      input: i
    });
  }

  render() {
    var file_json = JSON.parse(
      fs.readFileSync("./src/question01.json", "utf8")
    );

    return (
      <>
        <h1 className="header">{file_json.section}</h1>

        <Question value={file_json.questions[0].question} />

        <Choices
          value={file_json.questions[0].choices}
          onChange={(i) => this.changeInput(i)}
        />

        <Button
          variant="primary"
          size="lg"
          block
          className="mt-4"
          onClick={(i) => alert(this.state.input)}
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
