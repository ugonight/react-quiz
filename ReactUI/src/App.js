import React from "react";
import { Container } from "react-bootstrap";

import Menu from "./Menu";
import Quiz from "./Quiz";

var DEF = require("./define");

class App extends React.Component {

  constructor(props) {
    super(props);

    // タグに渡す属性
    var att = { changeMode: (i) => this.setState({ mode: i }) };

    // モードとタグの対応
    this.MODE_ELEMENTS = new Map();
    this.MODE_ELEMENTS.set(DEF.APP_MODE.MENU, <Menu {...att} />);
    this.MODE_ELEMENTS.set(DEF.APP_MODE.QUIZ, <Quiz {...att} />);

    // 最初はメニュー画面
    this.state = { mode: DEF.APP_MODE.MENU };
  }

  render() {
    return (
      <Container>
        {this.MODE_ELEMENTS.get(this.state.mode)}
      </Container>
    );
  }
}

export default App;
