import React, { Component } from "react";
import {Link} from 'react-router-dom';

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Results
import Results from './Results.js';

class App2 extends Component {
  state = {
    a: 0,
    b: 0,
    c: 0,
    open: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n = parseFloat(document.getElementById("app2N").value);
    const y = parseFloat(document.getElementById("app2Y").value);

    let a = parseFloat(y / n);
    let b = parseFloat(Math.pow((a * (1 - a)) / n, 0.5));
    let c = parseFloat(2 * b);

    this.setState({
      a: a,
      b: b,
      c: c,
      showResults: true,
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
                      Ejercicio propuesto: App2.
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
              Una muestra de n = 1000 votantes, seleccionados al azar en una ciudad, mostró y = 560 a favor del candidato Jones. Estime p, la fracción de votantes de la población que están a favor de Jones y precise un límite de error estándar de 2 en el error de estimación.
              </p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">Wackerly, Mendenhall III, Scheaffer (2009). Estadística Matemática con Aplicaciones (7.a ed.). CENGAGE Learning. Ejemplo: 8.2, p.425</sup>
            </ModalFooter>
          </Modal>
          <form className="form-group" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-4">
                <button onClick={this.statePopUp} className="btn btn-info">
                  Ejercicio
                </button>
                <label className="my-1">Haga uso del punto (.) para indicar valores decimales, no se aceptan comas: </label>
                <div className="form-group my-2">
                  <label>Y: </label>
                  <input
                    id="app2Y"
                    className="form-control"
                    placeholder="Digite Y"
                    type="text"
                    defaultValue="560"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>n: </label>
                  <input
                    id="app2N"
                    className="form-control"
                    placeholder="Digite n"
                    type="text"
                    defaultValue="1000"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Calcular
                </button>
              </div>
              <div id="result" className="col-md-8">
                <label className="h4">RESULTADOS: </label>
                <Results
                  a={this.state.a}
                  b={this.state.b}
                  c={this.state.c}
                  showResults={this.state.showResults}
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

export default App2;
