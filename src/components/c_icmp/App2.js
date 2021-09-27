import React, { Component } from "react";
import { Link } from "react-router-dom";

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Results
import Results from "./Results.js";

//MathJAX
import { MathComponent } from "mathjax-react";
const jsstats = require("js-stats");

class App2 extends Component {
  state = {
    a: 0,
    open: false,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n1 = parseFloat(document.getElementById("app2N1").value);
    const n2 = parseFloat(document.getElementById("app2N2").value);
    const u1 = parseFloat(document.getElementById("app2Y1").value);
    const u2 = parseFloat(document.getElementById("app2Y2").value);
    const s1 = parseFloat(document.getElementById("app2S1").value);
    const s2 = parseFloat(document.getElementById("app2S2").value);
    const alpha = parseFloat(document.getElementById("app2Slider").value);
    const df = parseFloat(document.getElementById("app2DF").value);


    let sp = Math.sqrt(((n1-1)*(s1) + (n2-1)*(s2))/(n1+n2-2))
    var t_distribution = new jsstats.TDistribution(df);

    let aprox =
        t_distribution.invCumulativeProbability((1 - alpha / 100) / 2, df) *
        -1 *//Multiplicar *-1
        sp *
        Math.sqrt((1/n1)+(1/n2)); 

    this.setState({
      a: `${u1-u2} ± ${aprox.toFixed(4)}`,
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
                Para alcanzar la máxima eficiencia al realizar una operación de
                ensamble en una planta manufacturera, obreros nuevos requieren
                aproximadamente un periodo de capacitación de 1 mes. Se sugirió
                un nuevo método de capacitación y se realizó un examen para
                comparar el nuevo método contra el procedimiento estándar. Dos
                grupos de nueve obreros nuevos cada uno fueron capacitados
                durante 3 semanas, un grupo usando el nuevo método y el otro
                siguiendo el procedimiento estándar de capacitación. El tiempo
                (en minutos) requerido por cada obrero{" "}
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Procedimiento</th>
                    <th>Mediciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Nuevo</th>
                    <td>32</td>
                    <td>37</td>
                    <td>35</td>
                    <td>28</td>
                    <td>41</td>
                    <td>44</td>
                    <td>35</td>
                    <td>31</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th>Estándar</th>
                    <td>35</td>
                    <td>31</td>
                    <td>29</td>
                    <td>25</td>
                    <td>34</td>
                    <td>40</td>
                    <td>27</td>
                    <td>32</td>
                    <td>31</td>
                  </tr>
                </tbody>
              </table>
              <p className="h5" align="justify">
              para ensamblar el dispositivo se registró al final del período de 3 semanas. Las mediciones resultantes son las que se muestran en la Tabla. Calcule la diferencia real de las medias (m1 − m2) con coeficiente de confianza .95. Suponga que los tiempos de ensamble están distribuidos normalmente en forma aproximada, que las varianzas de los tiempos de ensamble son aproximadamente iguales para los dos métodos y que las muestras son independientes.</p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">
                Wackerly, Mendenhall III, Scheaffer (2009). Estadística
                Matemática con Aplicaciones (7.a ed.). CENGAGE Learning.
                Ejemplo: 8.12, p.453
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
                        <MathComponent tex={String.raw`n_1: \ `} />{" "}
                      </label>
                      <input
                        id="app2N1"
                        className="form-control"
                        placeholder="Digite n1"
                        type="text"
                        defaultValue="9"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`n_2: \ `} />{" "}
                      </label>
                      <input
                        id="app2N2"
                        className="form-control"
                        placeholder="Digite n2"
                        type="text"
                        defaultValue="9"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`\overline Y_1: \ `} />{" "}
                      </label>
                      <input
                        id="app2Y1"
                        className="form-control"
                        placeholder="Digite Y1"
                        type="text"
                        defaultValue="35.22"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                        <label>
                        <MathComponent tex={String.raw`\overline Y_2: \ `} />{" "}
                      </label>
                      <input
                        id="app2Y2"
                        className="form-control"
                        placeholder="Digite Y2"
                        type="text"
                        defaultValue="31.56"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s_1^2: \ `} />{" "}
                      </label>
                      <input
                        id="app2S1"
                        className="form-control"
                        placeholder="Digite s1"
                        type="text"
                        defaultValue="24.445"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s_2^2: \ `} />{" "}
                      </label>
                      <input
                        id="app2S2"
                        className="form-control"
                        placeholder="Digite s2"
                        type="text"
                        defaultValue="20.027"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                        <label>
                        <MathComponent tex={String.raw` 1 - \alpha: \ `} />{" "}
                      </label>
                      <input
                        type="range"
                        min="90"
                        max="99"
                        id="app2Slider"
                        defaultValue="95"
                        onChange={(e) => {
                          const slider = document.getElementById("app2Slider");
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
                    <div className="col-md-6">
                        <label>
                        Grado de Libertad:
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="29"
                        id="app2DF"
                        defaultValue="16"
                        onChange={(e) => {
                          const slider = document.getElementById("app2DF");
                          const selectValue = document.getElementById(
                            "selectValueD"
                          );
                          slider.oninput = function () {
                            selectValue.innerHTML = slider.value;
                          };
                        }}
                      />
                      <div value="16" id="selectValueD">
                        16
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

export default App2;
