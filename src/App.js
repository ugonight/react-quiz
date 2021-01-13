import React from "react";
import "./App.css";
import {
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Button
} from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="question">問題</div>

      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={1}
        vertical
        className="choices"
      >
        <ToggleButton value={1} variant="outline-dark" className="choice mt-2">
          選択肢1
        </ToggleButton>
        <ToggleButton value={2} variant="outline-dark" className="choice mt-2">
          選択肢2
        </ToggleButton>
        <ToggleButton value={3} variant="outline-dark" className="choice mt-2">
          選択肢3
        </ToggleButton>
      </ToggleButtonGroup>

      <Button variant="primary" size="lg" block className="mt-4">
        決定
      </Button>
    </Container>
  );
}

export default App;
