import React, { Component } from "react";
import {Link} from 'react-router-dom';

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Results
import Results from './Results.js';

//MathJAX
import { MathComponent } from "mathjax-react";

class App1 extends Component {
  state = {
    a: 0,
    b: 0,
    c: 0,
    open: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n = parseFloat(document.getElementById("app1N").value);
    const u = parseFloat(document.getElementById("app1U").value);
    const s = parseFloat(document.getElementById("app1S").value);

    /* z representa: Nivel de confianza (a) = 0.05/2 = 0,025 -> 
    Este valor siempre sera el mismo porque el nivel de confianza (0.95) y significancia
    (0.05) siempre seran los mismos, por ende, z = 1.96 */

    let b = parseFloat(s/(Math.pow(n, 0.5)));
    let c = parseFloat(2 * b);
    let a = `${u} ± ${c.toFixed(2)}`

    this.setState({
      a: a,
      b: b,
      c: c
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
              Un investigador está interesado en la posibilidad de unir las aptitudes de televisión e Internet. Una muestra aleatoria de n = 50 usuarios de Internet dio que el tiempo medio semanal empleado en ver televisión era de 11.5 horas y que la desviación estándar era de 3.5 horas. Estime el tiempo medio poblacional que los usuarios de Internet pasan viendo televisión y fije un límite para el error de estimación.</p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">Wackerly, Mendenhall III, Scheaffer (2009). Estadística Matemática con Aplicaciones (7.a ed.). CENGAGE Learning. Ejercicio: 8.21, p.427</sup>
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
                  <label>n: </label>
                  <input
                    id="app1N"
                    className="form-control"
                    placeholder="Digite n"
                    type="text"
                    defaultValue="50"
                    required
                  />
                </div>
                <div className="form-group">
                  <label><MathComponent tex={String.raw`\mu: \ `} /> </label>
                  <input
                    id="app1U"
                    className="form-control"
                    placeholder="Digite u"
                    type="text"
                    defaultValue="11.5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label><MathComponent tex={String.raw`\sigma: \ `} /> </label>
                  <input
                    id="app1S"
                    className="form-control"
                    placeholder="Digite o"
                    type="text"
                    defaultValue="3.5"
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

export default App1;