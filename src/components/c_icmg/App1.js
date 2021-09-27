import React, { Component } from "react";
import {Link} from 'react-router-dom';

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
//Results
import Results from './Results.js';

//MathJAX
import { MathComponent } from "mathjax-react";

class App1 extends Component {
  state = {
    a: 0,
    open: false,
  };

  percentile_z = (p) => {
    if (p < 0.5) return -this.percentile_z(1-p);

    if (p > 0.92) {
        if (p === 1) return Infinity;
        let r = Math.sqrt(-Math.log(1-p));
        return (((2.3212128*r+4.8501413)*r-2.2979648)*r-2.7871893)/
               ((1.6370678*r+3.5438892)*r+1);
    }
    p -= 0.5;
    let r = p*p;
    return p*(((-25.4410605*r+41.3911977)*r-18.6150006)*r+2.5066282)/
             ((((3.1308291*r-21.0622410)*r+23.0833674)*r-8.4735109)*r+1);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const n = parseFloat(document.getElementById("app1N").value);
    const u = parseFloat(document.getElementById("app1Y").value);
    const s = parseFloat(document.getElementById("app1S").value);
    const alpha = parseFloat(document.getElementById("app1Slider").value);

    let a = Math.sqrt(s)/Math.sqrt(n)
    let aprox = (this.percentile_z((1-(alpha/100))/2)*-1)*a
    this.setState({
      a: `${u} ± ${aprox.toFixed(3)}`,
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
              <p className="h5" align="justify">Se registraron los tiempos de compra de n = 64 clientes seleccionados al azar en un supermercado local. El promedio y varianza de los 64 tiempos de compra fueron 33 minutos y 256 minutos<sup>2</sup>, respectivamente. Estime m, el verdadero promedio de tiempo de compra por cliente,con un coeficiente de confianza de 1 − α = .90.</p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">Wackerly, Mendenhall III, Scheaffer (2009). Estadística Matemática con Aplicaciones (7.a ed.). CENGAGE Learning. Ejemplo: 8.7, p.437</sup>
            </ModalFooter>
          </Modal>
          <form className="form-group" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <button onClick={this.statePopUp} className="btn btn-info">
                  Ejercicio
                </button>
                <label className="my-1">Haga uso del punto (.) para indicar valores decimales, no se aceptan comas: </label>
                <div className="form-group">
                  <div className="row">
                      <div className="col-md-6">
                        <label><MathComponent tex={String.raw`n: \ `} /> </label>
                        <input
                          id="app1N"
                          className="form-control"
                          placeholder="Digite n"
                          type="text"
                          defaultValue="64"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label><MathComponent tex={String.raw`\overline Y: \ `} /> </label>
                        <input
                          id="app1Y"
                          className="form-control"
                          placeholder="Digite Y"
                          type="text"
                          defaultValue="33"
                          required
                        />
                      </div>
                    </div>
                </div>
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label><MathComponent tex={String.raw`s^2: \ `} /> </label>
                      <input
                        id="app1S"
                        className="form-control"
                        placeholder="Digite s^2"
                        type="text"
                        defaultValue="256"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label><MathComponent tex={String.raw` 1 - \alpha: \ `} /> </label>
                      <input 
                        type="range" 
                        min="90"
                        max="99" 
                        id="app1Slider"
                        onChange={e => {
                          const slider = document.getElementById("app1Slider");
                          const selectValue = document.getElementById("selectValue");
                          slider.oninput = function(){
                            selectValue.innerHTML = slider.value/100;
                          }
                        }}
                      />
                      <div value="0.9" id="selectValue">0.9</div>
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
                />
                <Link to="/icmg">
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
