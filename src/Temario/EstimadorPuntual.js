import React, {Component} from "react";
import {Link} from 'react-router-dom';

//MathJAX
import { MathComponent } from "mathjax-react";

class EstimadorPuntual extends Component {

  render() {
    return (
      <div className="App">
        <table className="table table-striped table-hover table-bordered my-1">

          {/* CABEZA */}

          <thead className="thead-dark">
            <tr>
              <th scope="col">Parámetro Objetivo<MathComponent tex={String.raw`\Theta\ `} /></th>
              <th scope="col" className="text-center">Tamaño(s) Muestral(es) <MathComponent tex={String.raw`.`} /></th>
              <th scope="col">Estimador Puntual <MathComponent tex={String.raw`E( \hat\Theta\ )`} /></th>
              <th scope="col">
                <MathComponent tex={String.raw`E( \hat\Theta\ )`} />
              </th>
              <th scope="col">Error Estándar <MathComponent tex={String.raw`\sigma_\hat\Theta\ `} /></th>
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
                <MathComponent tex={String.raw`\ n`} />
              </td>
              <td>
                <MathComponent tex={String.raw`\overline Y `} />
              </td>
              <td>
                <MathComponent tex={String.raw`\mu\ `} />
              </td>
              <td>
                <MathComponent tex={String.raw`\frac{\sigma}{\sqrt n}\ `} />
              </td>
              <td>
                <Link to="/ep/app1">
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
                <MathComponent tex={String.raw`\ n`} />
              </td>
              <td>
                <MathComponent tex={String.raw`\hat\Theta\ = \frac{Y}{n} `} />
              </td>
              <td>
                <MathComponent tex={String.raw`\ p`} />
              </td>
              <td>
                <MathComponent tex={String.raw`\sqrt\frac{pq}{n}\ `} />
              </td>
              <td>
                <Link to="/ep/app2">
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
                <MathComponent tex={String.raw`n_1 \ y \ n_2\ `} />
              </td>
              <td>
                <MathComponent
                  tex={String.raw`\overline Y_1 - \overline Y_2\ `}
                />
              </td>
              <td>
                <MathComponent tex={String.raw`\mu_1 - \mu_2\ `} />
              </td>
              <td>
                <MathComponent
                  tex={String.raw`\sqrt{\frac{\sigma_1}{n_1} + \frac{\sigma_2}{n_2}}\ `}
                />
              </td>
              <td>
                <Link to="/ep/app3">
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
                <MathComponent tex={String.raw`n_1 \ y \ n_2\ `} />
              </td>
              <td>
                <MathComponent tex={String.raw`\hat p_1 - \hat p_2\ `} />
              </td>
              <td>
                <MathComponent tex={String.raw`p_1 - p_2\ `} />
              </td>
              <td>
                <MathComponent
                  tex={String.raw`\sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}\ `}
                />
              </td>
              <td>
                <Link to="/ep/app4">
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

export default EstimadorPuntual;