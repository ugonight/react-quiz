import React, { useState } from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button
} from "react-bootstrap";

function Question(props) {
  return <div className="question">{props.value}</div>;
}

function Choices(props) {
  // const [radioValue, setRadioValue] = useState("0");

  const choiceList = ["選択肢1", "選択肢2", "選択肢3"];

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
    return (
      <>
        <Question value="問題" />

        <Choices onChange={(i) => this.changeInput(i)} />

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
