import React, { Component } from "react";
import {Link} from 'react-router-dom';

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Results
import Results from './Results.js';

//MathJAX
import { MathComponent } from "mathjax-react";

class App4 extends Component {
  state = {
    a: 0,
    b: 0,
    c: 0,
    open: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n1 = parseFloat(document.getElementById("app4N1").value);
    const n2 = parseFloat(document.getElementById("app4N2").value);
    const y1 = parseFloat(document.getElementById("app4Y1").value);
    const y2 = parseFloat(document.getElementById("app4Y2").value);

    let b = parseFloat(Math.pow((((y1/n1)*(1-(y1/n1))/n1)+((y2/n2)*(1-(y2/n2))/n2)), 0.5));
    let c = parseFloat(2 * b);
    let a = parseFloat((y1/n1)-(y2/n2));

    this.setState({
      a: a.toFixed(2),
      b: b.toFixed(4),
      c: c.toFixed(4),
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
                      Ejercicio propuesto: App4.
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
              La propuesta de un bono para la construcción de una escuela será enviada a los votantes en la siguiente elección municipal. Una parte importante del dinero derivado de esta emisión de bonos se empleará en construir escuelas en una zona de rápido desarrollo de la ciudad y lo demás se usará para renovar y actualizar los edificios escolares del resto de ésta. Para evaluar la viabilidad de la propuesta de un bono, a una muestra aleatoria de n1 = 50 residentes de la zona de rápido desarrollo y n2 = 100 de las otras partes de la ciudad, se les preguntó si piensan votar por la propuesta. Los resultados se tabulan en la tabla siguiente.</p>
              <p className="h4" align="justify">Valores muestrales para opinión sobre propuesta de bono</p>
              <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Sección en desarrollo</th>
                        <th scope="col" className="text-center">Resto de la ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Tamaño muestral</th>
                        <td> 50 </td>
                        <td> 100 </td>
                    </tr>
                    <tr>
                        <th scope="col">Número a favor de propuesta</th>
                        <td> 38 </td>
                        <td> 65 </td>
                    </tr>
                    <tr>
                        <th scope="col">Proporción a favor de propuesta</th>
                        <td> 0.76 </td>
                        <td> 0.65 </td>
                    </tr>
                </tbody>
              </table>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">Hernando Castaño Buitrago (2016). CORPORACIÓN UNIVERSITARIA DEL CARIBE – CECAR FACULTAD DE CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS ESTADÍSTICA INFERENCIAL: ESTIMACIÓN DIFERENCIA DE MEDIAS Y PROPORCIONES p.2</sup>
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
                        <MathComponent tex={String.raw`n_1: \ `} />
                      </label>
                      <input
                        id="app4N1"
                        className="form-control"
                        placeholder="Digite N1"
                        type="text"
                        defaultValue="50"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`n_2: \ `} />
                      </label>
                      <input
                        id="app4N2"
                        className="form-control"
                        placeholder="Digite N2"
                        type="text"
                        defaultValue="100"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y_1: \ `} />
                      </label>
                      <input
                        id="app4Y1"
                        className="form-control"
                        placeholder="Digite Y1"
                        type="text"
                        defaultValue="38"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y_2: \ `} />
                      </label>
                      <input
                        id="app4Y2"
                        className="form-control"
                        placeholder="Digite S2"
                        type="text"
                        defaultValue="65"
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

export default App4;