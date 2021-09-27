import React, { Component } from "react";
import {Link} from 'react-router-dom';

//MathJAX
import { MathComponent } from "mathjax-react";

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Results
import Results from "./Results.js";

class App3 extends Component {
  state = {
    a: 0,
    b: 0,
    c: 0,
    open: false,
  };

  onSubmit = (e) => {
    const y1 = parseFloat(document.getElementById("app3Y1").value);
    const y2 = parseFloat(document.getElementById("app3Y2").value);
    const s1 = parseFloat(document.getElementById("app3S1").value);
    const s2 = parseFloat(document.getElementById("app3S2").value);
    const n1 = parseFloat(document.getElementById("app3N1").value);
    const n2 = parseFloat(document.getElementById("app3N2").value);

    let a = parseFloat(y1 - y2);
    let b = parseFloat(Math.pow((s1 / n1) + (s2 / n2), 0.5));
    let c = parseFloat(2 * b);

    this.setState({
      a: a,
      b: b,
      c: c,
      showResults: true,
    });

    e.preventDefault();
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
                      Ejercicio propuesto: App3.
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
                Una comparación de la durabilidad de dos tipos de llantas para
                automóvil se obtuvo de muestras de pruebas en carretera de n1 =
                n2 = 100 llantas de cada tipo. Se registró el número de millas
                hasta quedar inútiles, el desgaste se definió como el número de
                millas hasta que la cantidad restante de superficie de
                rodamiento llegó a un valor pequeño especifi cado previamente.
                Las mediciones para los dos tipos de llantas se obtuvieron de
                manera independiente y se calcularon las siguientes medias y
                varianzas:{" "}
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <MathComponent
                      tex={String.raw`\overline Y_1 = 26,400 millas \ `}
                    />
                  </div>
                  <div className="col-md-6">
                    <MathComponent
                      tex={String.raw`\overline Y_2 = 25,100 millas \ `}
                    />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <MathComponent
                      tex={String.raw`s_1^2 = 1,440,000 millas \ `}
                    />
                  </div>
                  <div className="col-md-6">
                    <MathComponent
                      tex={String.raw`s_2^2 = 1,960,000 millas \ `}
                    />
                  </div>
                </div>
              </div>
              <p className="h5" align="justify">
                Estime la diferencia en la media de millas hasta quedar inútiles
                y precise un límite de error estándar de 2 en el error de
                estimación.
              </p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">
                Wackerly, Mendenhall III, Scheaffer (2009). Estadística
                Matemática con Aplicaciones (7.a ed.). CENGAGE Learning.
                Ejemplo: 8.3, p.426
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
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y_1: \ `} />
                      </label>
                      <input
                        id="app3Y1"
                        className="form-control"
                        placeholder="Digite Y1"
                        type="text"
                        defaultValue="26400"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y_2: \ `} />
                      </label>
                      <input
                        id="app3Y2"
                        className="form-control"
                        placeholder="Digite Y2"
                        type="text"
                        defaultValue="25100"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s_1^2: \ `} />
                      </label>
                      <input
                        id="app3S1"
                        className="form-control"
                        placeholder="Digite S1"
                        type="text"
                        defaultValue="1440000"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s_2^2: \ `} />
                      </label>
                      <input
                        id="app3S2"
                        className="form-control"
                        placeholder="Digite S2"
                        type="text"
                        defaultValue="1960000"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`n_1: \ `} />
                      </label>
                      <input
                        id="app3N1"
                        className="form-control"
                        placeholder="Digite n1"
                        type="text"
                        defaultValue="100"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`n_2: \ `} />
                      </label>
                      <input
                        id="app3N2"
                        className="form-control"
                        placeholder="Digite n2"
                        type="text"
                        defaultValue="100"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Calcular
                </button>
              </div>
              <div id="result" className="col-md-6">
                <label className="h4">RESULTADOS: </label>
                <Results
                  a={this.state.a}
                  b={this.state.b}
                  c={this.state.c}
                />
                <Link to="/ep">
                  <button 
                    type="submit" 
                    className="btn btn-primary my-3"
                  >
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

export default App3;
