import React, { Component } from "react";
import { Link } from "react-router-dom";

//MathJAX
import { MathComponent } from "mathjax-react";

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//Results
import Results from "./Results.js";

class App3 extends Component {
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
    const y1 = parseFloat(document.getElementById("app3Y1").value);
    const y2 = parseFloat(document.getElementById("app3Y2").value);
    const s1 = parseFloat(document.getElementById("app3S1").value);
    const s2 = parseFloat(document.getElementById("app3S2").value);
    const n1 = parseFloat(document.getElementById("app3N1").value);
    const n2 = parseFloat(document.getElementById("app3N2").value);
    const alpha = parseFloat(document.getElementById("app3Slider").value);

    let u = parseFloat(y1 - y2);
    let b = parseFloat(Math.pow((s1 / n1) + (s2 / n2), 0.5));
    let aprox = (this.percentile_z((1-(alpha/100))/2)*-1)*b

    this.setState({
      a: `${u} ± ${aprox.toFixed(3)}`,
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
                Un método sugerido para resolver la escasez de energía eléctrica
                en una región comprende la construcción de plantas nucleares
                flotantes generadoras de energía eléctrica a pocas millas de la
                costa en el océano. La preocupación por la posibilidad de una
                colisión de barcos con la planta flotante, pero anclada, ha
                aumentado la necesidad de una estimación de la densidad del
                tránsito de barcos en la zona. El número de barcos que pasan
                diariamente a no más de 10 millas de la ubicación propuesta de
                la planta eléctrica, registrada para n = 60 días durante julio y
                agosto, poseía una media muestral y varianza de y<sup>-</sup>
                =7.2 y s<sup>2</sup> = 8.8.
              </p>

              <p className="h5" align="justify">
                Se esperaba que la densidad de tránsito disminuyera durante los
                meses de invierno. Una muestra de n = 90 registros diarios de
                avistamientos de barcos para diciembre, enero y febrero dieron
                una media y varianza de y<sup>-</sup> = 4.7 y s<sup>2</sup> =
                4.9. Encuentre un intervalo de confianza de 90% para la
                diferencia en la densidad promedio de tránsito de barcos entre
                los meses de verano e invierno.
              </p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">
                Wackerly, Mendenhall III, Scheaffer (2009). Estadística
                Matemática con Aplicaciones (7.a ed.). CENGAGE Learning.
                Ejercicio: 8.67, p.420
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
                        defaultValue="7.2"
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
                        defaultValue="4.7"
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
                        defaultValue="8.8"
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
                        defaultValue="4.9"
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
                        defaultValue="60"
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
                        defaultValue="90"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label><MathComponent tex={String.raw` 1 - \alpha: \ `} /> </label>
                        <input 
                        type="range" 
                        min="90"
                        max="99" 
                        id="app3Slider"
                        defaultValue="90"
                        onChange={e => {
                            const slider = document.getElementById("app3Slider");
                            const selectValue = document.getElementById("selectValue");
                            slider.oninput = function(){
                            selectValue.innerHTML = slider.value/100;
                            }
                        }}
                        />
                        <div value="0.9" id="selectValue">0.90</div>
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

export default App3;
