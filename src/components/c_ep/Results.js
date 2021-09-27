import React, { Component } from "react";

//MathJAX
import { MathComponent } from "mathjax-react";

class Results extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label>
                <MathComponent tex={String.raw`E( \hat \Theta)`} />{" "}
              </label>
              <input
                id="a"
                className="form-control"
                type="text"
                value={this.props.a}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>
                <MathComponent tex={String.raw`\sigma_\hat \Theta\ `} />{" "}
              </label>
              <input
                id="b"
                className="form-control"
                type="text"
                value={this.props.b}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>b: </label>
              <input
                id="c"
                className="form-control"
                type="text"
                value={this.props.c}
                readOnly
              />
            </div>
          </div>
        </div>
      );
    }
  }
  

  export default Results;