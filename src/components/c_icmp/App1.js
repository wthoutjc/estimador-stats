import React, { Component } from "react";
import { Link } from "react-router-dom";

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Results
import Results from "./Results.js";

//MathJAX
import { MathComponent } from "mathjax-react";
const jsstats = require('js-stats');

class App1 extends Component {
  state = {
    a: 0,
    open: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n = parseFloat(document.getElementById("app1N").value);
    const u = parseFloat(document.getElementById("app1Y").value);
    const s = parseFloat(document.getElementById("app1S").value);
    const alpha = parseFloat(document.getElementById("app1Slider").value);
    const df = parseFloat(document.getElementById("app1DF").value);

    let a = s / Math.sqrt(n);
    var t_distribution = new jsstats.TDistribution(df);

    let aprox = (t_distribution.invCumulativeProbability((1-alpha/100)/2, df)*-1) *a//Multiplicar *-1

    this.setState({
      a: `${u} ± ${aprox.toFixed(1)}`,
    });
  };

  statePopUp = (e) => {
    this.setState({ open: !this.state.open });
    e.preventDefault();
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <Modal isOpen={this.state.open}>
            <ModalHeader>
              <div className="container">
                <div className="row">
                  <div className="col-md-11">
                    <p className="h4" align="left">
                      Ejercicio propuesto: App1.
                    </p>
                  </div>
                  <div className="col-md-1">
                    <button
                      type="button"
                      id="btn-cerrar-popup"
                      class="btn-cerrar-popup"
                      onClick={this.statePopUp}
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="h5" align="justify">
              Un fabricante ha inventado una nueva pólvora que fue probada en ocho proyectiles. Las velocidades resultantes en la boca del cañón, en pies por segundo, fueron las siguientes: </p>
              <table>
                <tr>
                  <td>3005</td>
                  <td>2925</td>
                  <td>2935</td>
                  <td>2965</td>
                </tr>
                <tr>
                  <td>2995</td>
                  <td>3005</td>
                  <td>2937</td>
                  <td>2905</td>
                </tr>
              </table>
              <p className="h5" align="justify">Encuentre un intervalo de confianza de 95% para el verdadero promedio de velocidad m para proyectiles de este tipo. Suponga que las velocidades en la boca del cañón están distribuidas normalmente en forma aproximada.</p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">
                Wackerly, Mendenhall III, Scheaffer (2009). Estadística
                Matemática con Aplicaciones (7.a ed.). CENGAGE Learning.
                Ejemplo: 8.7, p.437
              </sup>
            </ModalFooter>
          </Modal>
          <form className="form-group" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <button onClick={this.statePopUp} className="btn btn-info">
                  Ejercicio
                </button>
                <label className="my-1">
                  Haga uso del punto (.) para indicar valores decimales, no se
                  aceptan comas:{" "}
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`n: \ `} />{" "}
                      </label>
                      <input
                        id="app1N"
                        className="form-control"
                        placeholder="Digite n"
                        type="text"
                        defaultValue="8"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y: \ `} />{" "}
                      </label>
                      <input
                        id="app1Y"
                        className="form-control"
                        placeholder="Digite Y"
                        type="text"
                        defaultValue="2959"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s: \ `} />{" "}
                      </label>
                      <input
                        id="app1S"
                        className="form-control"
                        placeholder="Digite S"
                        type="text"
                        defaultValue="39.1"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw` 1 - \alpha: \ `} />{" "}
                      </label>
                      <input
                        type="range"
                        min="90"
                        max="99"
                        id="app1Slider"
                        defaultValue="95"
                        onChange={(e) => {
                          const slider = document.getElementById("app1Slider");
                          const selectValue = document.getElementById(
                            "selectValue"
                          );
                          slider.oninput = function () {
                            selectValue.innerHTML = slider.value / 100;
                          };
                        }}
                      />
                      <div value="0.95" id="selectValue">
                        0.95
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        Grado de Libertad:
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="29"
                        id="app1DF"
                        defaultValue="7"
                        onChange={(e) => {
                          const slider = document.getElementById("app1DF");
                          const selectValue = document.getElementById(
                            "selectValueD"
                          );
                          slider.oninput = function () {
                            selectValue.innerHTML = slider.value;
                          };
                        }}
                      />
                      <div value="7" id="selectValueD">
                        7
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Calcular
                </button>
              </div>
              <div id="result" className="col-md-6">
                <label className="h4">RESULTADOS: </label>
                <Results a={this.state.a} />
                <Link to="/icmp">
                  <button type="submit" className="btn btn-primary my-3">
                    Volver
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App1;
