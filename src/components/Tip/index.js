import React, { Component } from "react";
import "./style.css"

class Tip extends Component {
  render() {
    const { message, onClose } = this.props;
    return (
      <div className="tip">
        <div className="tip__alert">
          <div className="tip__content">{message}</div>
          <div className="tip__btns">
            <a href='http:www.baidu.com' className="tip__btn" onClick={onClose}>
              确定
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tip;
