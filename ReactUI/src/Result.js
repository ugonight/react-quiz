import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-doughnutlabel';

var DEF = require("./define");
var Controller = require("./controller");

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correctNum: 0,
      wrongNum: 0,
      correctPer: 0
    };

    Controller.getRecord().then(data => {
      this.setState({ correctNum: data.correctNum, wrongNum: data.wrongNum, correctPer: data.correctPer });
    });
  }

  changeModeToMenu() {
    Controller.resetQuiz().then(data => {
      this.props.changeMode(DEF.APP_MODE.MENU);
    });
  }

  render() {
    const data = {
      labels: ['正解', '不正解'],
      datasets: [{
        label: '# of Votes',
        data: [this.state.correctNum, this.state.wrongNum],
        backgroundColor: [
          '#28a745',
          '#dc3545',
        ],
        borderColor: [
          '#c3e6cb',
          '#f5c6cb',
        ],
        borderWidth: 1,
      },],
    };

    const options = {
      responsive: true,
      plugins: {
        doughnutlabel: {
          labels: [{
            text: '正解率',
            color: '#666666',
            font: {
              size: 20,
            },
          }, {
            text: this.state.correctPer + '%',
            color: '#888888',
            font: {
              size: 80,
            },
          },],
        },
      }
    };

    return (
      <Container>
        <h1>Result</h1>
        <Row>
          <Col />
          <Col md={10}>
            <Doughnut data={data} options={options} />
          </Col>
          <Col />
        </Row>
        <Row>
          <Button variant="primary" size="lg" className="mt-5" block onClick={(e) => this.changeModeToMenu()} >
            メニューへ戻る
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Result;