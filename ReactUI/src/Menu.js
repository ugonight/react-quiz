import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

var DEF = require("./define");
var Controller = require("./controller");

function Login(props) {
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  var isWrong = props.triedLogin && !props.isLogin;

  return (
    <>
      <Modal
        show={!props.isLogin}
        onHide={() => { }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="ml-2 mb-3">ログインしろよ（笑）</Row>

            {/* ユーザー名 */}
            <Form.Group as={Row} controlId="formPlaintextUserId">
              <Form.Label column sm="2">
                User ID
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Password" onChange={(e) => { setName(e.target.value) }} />
              </Col>
            </Form.Group>

            {/* パスワード */}
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" onChange={(e) => { setPass(e.target.value) }} isInvalid={isWrong} />
                {isWrong && <Form.Control.Feedback type="invalid">間違っとるよ（笑）</Form.Control.Feedback>}
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => props.checkLogin(pass, name)}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>);
}

class Menu extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      isLogin: cookies.get('isLogin') || false,
      triedLogin: false,
      categories: []
    };
  }

  componentDidMount() {
    Controller.getCategoryList().then(data => {
      this.setState({ categories: data });
    });
  }

  checkLogin(pass, userId) {
    const { cookies } = this.props;

    var res = pass === "wara";
    this.setState({
      isLogin: res,
      triedLogin: true
    });

    cookies.set('isLogin', res);
    if (res) cookies.set('userId', userId);
  }

  render() {
    return (
      <Container>
        <h1>メニュー</h1>

        <Login isLogin={this.state.isLogin} triedLogin={this.state.triedLogin} checkLogin={(pass, name) => this.checkLogin(pass, name)} />

        <Form className="border border-dark rounded">
          <Form.Group as={Row} controlId="category" mb={3} className="mt-3 mx-3">
            <Form.Label column sm="2">
              カテゴリ
          </Form.Label>
            <Col sm="10">
              <Row>
                <Col>
                  <Button variant="outline-primary" size="sm">
                    すべて切り替え
                  </Button>
                </Col>
                <Col>
                  対象問題数: 100
                </Col>
              </Row>
              <Row>
                {
                  this.state.categories.map((category) =>
                    <Form.Check inline label={category} type="checkbox" id={category} />
                  )
                }
              </Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="NumberOfQuestions" mb={3} className="mt-3 mx-3">
            <Form.Label column sm="2">
              出題数
          </Form.Label>
            <Col sm="5">
              <Form.Control type="number" />
            </Col>
          </Form.Group>
        </Form>

        <Row className="d-grid gap-2 col-6 mx-auto mt-3" mb={3}>
          <Button variant="primary" size="lg" block onClick={(e) => this.props.changeMode(DEF.APP_MODE.QUIZ)} >
            開始
          </Button>
        </Row>

      </Container>
    );
  }
}

export default withCookies(Menu);