import React, {Component} from "react";
import {Link} from 'react-router-dom';

//MathJAX
import { MathComponent } from "mathjax-react";

class ICMuestraGrande extends Component {

  render() {
    return (
      <div className="App">
        <table className="table table-striped table-hover table-bordered my-1">

          {/* CABEZA */}

          <thead className="thead-dark">
            <tr>
              <th scope="col">Parámetro Objetivo<MathComponent tex={String.raw`\Theta\ `} /></th>
              <th scope="col"><MathComponent tex={String.raw`Z*\frac{\alpha}{2} *\sigma_\hat\Theta\ `} /></th>
              <th scope="col">App <MathComponent tex={String.raw`.`} /></th>
            </tr>
          </thead>

          {/* CUERPO: Apps 1-4*/}
          
          <tbody>

            {/* App 1: */}

            <tr>
              <th scope="col">
                <MathComponent tex={String.raw`\mu\ `} />
              </th>
              <td>
              <MathComponent tex={String.raw`Z*\frac{\alpha}{2}*\frac{\sigma}{\sqrt n}\ `} />
              </td>
              <td>
                <Link to="/icmg/app1">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-success"
                  >
                    APP1
                  </button>
                </Link>
              </td>
            </tr>

            {/* App 2: */}

            <tr>
              <th scope="col">
                <MathComponent tex={String.raw`\ p`} />
              </th>
              <td>
              <MathComponent tex={String.raw`Z*\frac{\alpha}{2}*\sqrt\frac{pq}{n}\ `} />
              </td>
              <td>
                <Link to="/icmg/app2">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-success"
                  >
                    APP2
                  </button>
                </Link>
              </td>
            </tr>

            {/* App 3: */}

            <tr>
              <th scope="col">
                <MathComponent tex={String.raw`\mu_1 - \mu_2\ `} />
              </th>
              <td>
              <MathComponent
                  tex={String.raw`Z*\frac{\alpha}{2}*\sqrt{\frac{\sigma_1}{n_1} + \frac{\sigma_2}{n_2}}\ `}
                />
              </td>
              <td>
                <Link to="/icmg/app3">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-success"
                  >
                    APP3
                  </button>
                </Link>
              </td>
            </tr>

            {/* App 4: */}

            <tr>
              <th scope="col">
                <MathComponent tex={String.raw`p_1 - p_2\ `} />
              </th>
              <td>
              <MathComponent
                  tex={String.raw`Z*\frac{\alpha}{2}*\sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}\ `}
                />
              </td>
              <td>
                <Link to="/icmg/app4">
                  <button 
                    type="button" 
                    className="btn btn-sm btn-success"
                  >
                    APP4
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/"> 
          <button 
            type="button" 
            className="btn btn-sm btn-primary"
          >
            VOLVER
          </button>
        </Link>
      </div>
    );
  }
}

export default ICMuestraGrande;