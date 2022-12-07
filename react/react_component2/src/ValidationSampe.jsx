import React, { Component } from "react";

import "./ValidationSample.css";

class ValidationSample extends Component {
  // state - 클래스 안의 멤버 변수나 함수 안의 지역변수와 유효성
  // state
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  // 버튼 눌렀을 때 처리
  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;