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
                <MathComponent tex={String.raw`\sigma^2: `} />{" "}
              </label>
              <input
                id="a"
                className="form-control"
                type="text"
                value={this.props.a}
                readOnly
              />
            </div>
          </div>
        </div>
      );
    }
  }
  

  export default Results;