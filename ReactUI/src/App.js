import React from "react";
import { Container } from "react-bootstrap";
import posed from "react-pose";

import Menu from "./Menu";
import Quiz from "./Quiz";
import Result from "./Result";

var DEF = require("./define");

const DELAY_TIME = 200;

const Pose = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: DELAY_TIME,
      ease: 'linear'
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: DELAY_TIME,
      ease: 'linear'
    }
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);

    // タグに渡す属性
    var att = { changeMode: (i) => this.setState({ nextMode: i, onChangeMode: true }) };

    // モードとタグの対応
    this.MODE_ELEMENTS = new Map();
    this.MODE_ELEMENTS.set(DEF.APP_MODE.MENU, <Menu {...att} />);
    this.MODE_ELEMENTS.set(DEF.APP_MODE.QUIZ, <Quiz {...att} />);
    this.MODE_ELEMENTS.set(DEF.APP_MODE.RESULT, <Result {...att} />);

    // 最初はメニュー画面
    this.state = {
      // 現在のモード
      mode: DEF.APP_MODE.MENU,

      // 遷移後のモード
      nextMode: DEF.APP_MODE.MENU,
      // モード切り替えが発生した直後
      onChangeMode: false,
      // 表示されているか
      isVisible: true
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.onChangeMode) {
      var next = this.state.nextMode;
      this.setState({ onChangeMode: false, isVisible: false });

      this.delayFunc(DELAY_TIME).then(() => {
        this.setState({ mode: next, isVisible: true });
      });
    }
  }

  delayFunc(time) {
    return new Promise(function (callback) {
      setTimeout(function () {
        callback();
      }, time);
    });
  }

  render() {
    return (
      <Container>
        <Pose pose={this.state.isVisible ? "visible" : "hidden"}>{this.MODE_ELEMENTS.get(this.state.mode)}</Pose>
      </Container>
    );
  }
}

export default App;
