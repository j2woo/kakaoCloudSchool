import React, { Component } from "react";
class EventPractice extends Component {
  state = {
    name: "",
    message: "",
  };

  // babel이 인스턴스의 메서드로 변환을 자동으로 수행
  // this.handleChange로 이 메서드를 사용하는 것이 가능
  handleChange = (e) => {
    // 이벤트가 발생한 객체는 e.target
    // e.target.name은 이벤트가 발생한 객체의 name
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.name + " : " + this.state.message);
    this.setState({
      name: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  /*
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }*/
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}> 확인</button>
      </>
    );
  }
}

export default EventPractice;
