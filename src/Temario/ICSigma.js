import React, { Component } from "react";
import { Link } from "react-router-dom";

//Bootstrap: PopUps
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Results
import Results from "../components/c_ics/Results.js";

//MathJAX
import { MathComponent } from "mathjax-react";

class ICSigma extends Component {
  state = {
    a: 0,
    open: false,
  };

  _subu = ($p) => {
    var $y = -Math.log(4 * $p * (1 - $p));
    var $x = Math.sqrt(
      $y *
        (1.570796288 +
          $y *
            (0.03706987906 +
              $y *
                (-0.8364353589e-3 +
                  $y *
                    (-0.2250947176e-3 +
                      $y *
                        (0.6841218299e-5 +
                          $y *
                            (0.5824238515e-5 +
                              $y *
                                (-0.104527497e-5 +
                                  $y *
                                    (0.8360937017e-7 +
                                      $y *
                                        (-0.3231081277e-8 +
                                          $y *
                                            (0.3657763036e-10 +
                                              $y * 0.6936233982e-12))))))))))
    );
    if ($p > 0.5) $x = -$x;
    return $x;
  };

  _subuprob = ($x) => {
    var $p = 0; /* if ($absx > 100) */
    var $absx = Math.abs($x);

    if ($absx < 1.9) {
      $p =
        Math.pow(
          1 +
            $absx *
              (0.049867347 +
                $absx *
                  (0.0211410061 +
                    $absx *
                      (0.0032776263 +
                        $absx *
                          (0.0000380036 +
                            $absx * (0.0000488906 + $absx * 0.000005383))))),
          -16
        ) / 2;
    } else if ($absx <= 100) {
      for (var $i = 18; $i >= 1; $i--) {
        $p = $i / ($absx + $p);
      }
      $p =
        Math.exp(-0.5 * $absx * $absx) / Math.sqrt(2 * Math.PI) / ($absx + $p);
    }

    if ($x < 0) $p = 1 - $p;
    return $p;
  };

  chisqr = ($n, $p) => {
    var $x;

    if ($p > 1 || $p <= 0) {
      return; //ACA VA UN MENSAJE ERROR
    } else if ($p === 1) {
      $x = 0;
    } else if ($n === 1) {
      $x = Math.pow(this._subu($p / 2), 2);
    } else if ($n === 2) {
      $x = -2 * Math.log($p);
    } else {
      var $u = this._subu($p);
      var $u2 = $u * $u;

      $x = Math.max(
        0,
        $n +
          Math.sqrt(2 * $n) * $u +
          (2 / 3) * ($u2 - 1) +
          ($u * ($u2 - 7)) / 9 / Math.sqrt(2 * $n) -
          (2 / 405 / $n) * ($u2 * (3 * $u2 + 7) - 16)
      );

      if ($n <= 100) {
        var $x0;
        var $p1;
        var $z;
        do {
          $x0 = $x;
          if ($x < 0) {
            $p1 = 1;
          } else if ($n > 100) {
            $p1 = this._subuprob(
              (Math.pow($x / $n, 1 / 3) - (1 - 2 / 9 / $n)) /
                Math.sqrt(2 / 9 / $n)
            );
          } else if ($x > 400) {
            $p1 = 0;
          } else {
            var $i0;
            var $a;
            if ($n % 2 !== 0) {
              $p1 = 2 * this._subuprob(Math.sqrt($x));
              $a = (Math.sqrt(2 / Math.PI) * Math.exp(-$x / 2)) / Math.sqrt($x);
              $i0 = 1;
            } else {
              $p1 = $a = Math.exp(-$x / 2);
              $i0 = 2;
            }

            for (var $i = $i0; $i <= $n - 2; $i += 2) {
              $a *= $x / $i;
              $p1 += $a;
            }
          }
          $z = Math.exp(
            (($n - 1) * Math.log($x / $n) -
              Math.log(4 * Math.PI * $x) +
              $n -
              $x -
              1 / $n / 6) /
              2
          );
          $x += ($p1 - $p) / $z;
          //						$x = round_to_precision($x, 5);
        } while ($n < 31 && Math.abs($x0 - $x) > 1e-4);
      }
    }
    return $x;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const n = parseFloat(document.getElementById("app1N").value);
    const s = parseFloat(document.getElementById("app1S").value);
    const alpha = parseFloat(document.getElementById("app1Slider").value);
    const df = parseInt(document.getElementById("app1DF").value);

    let p1 = ((n - 1) * s) / parseFloat(this.chisqr(df, 1 - alpha/100));
    let stimador = parseFloat(this.chisqr(df, alpha/100))
    let p2 = ((n - 1) * s) / stimador.toFixed(3);

    this.setState({
      a: `(${p1.toFixed(2)}, ${p2.toFixed(2)})`,
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
                Un experimentador desea comprobar la variabilidad de mediciones
                obtenidas al usar equipo diseñado para medir el volumen de una
                fuente de audio. Tres mediciones independientes registradas por
                este equipo para la misma fuente de sonido fueron 4.1, 5.2 y
                10.2. Estime σ<sup>2</sup> con coeficiente de confianza .90.
              </p>
            </ModalBody>
            <ModalFooter>
              <sup className="h6">
                Wackerly, Mendenhall III, Scheaffer (2009). Estadística
                Matemática con Aplicaciones (7.a ed.). CENGAGE Learning.
                Ejemplo: 8.13, p.459
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
                        defaultValue="3"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        <MathComponent tex={String.raw`s^2: \ `} />{" "}
                      </label>
                      <input
                        id="app1S"
                        className="form-control"
                        placeholder="Digite S"
                        type="text"
                        defaultValue="10.57"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-2">
                  <div className="row">
                    <div className="col-md-6">
                    <label>Grado de Libertad:</label>
                      <input
                        type="range"
                        min="1"
                        max="29"
                        id="app1DF"
                        defaultValue="2"
                        onChange={(e) => {
                          const slider = document.getElementById("app1DF");
                          const selectValue = document.getElementById(
                            "selectValue"
                          );
                          slider.oninput = function () {
                            selectValue.innerHTML = slider.value;
                          };
                        }}
                      />
                      <div value="2" id="selectValue">
                        2
                      </div>
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
                            "selectValueD"
                          );
                          slider.oninput = function () {
                            selectValue.innerHTML = slider.value / 100;
                          };
                        }}
                      />
                      <div value="0.95" id="selectValueD">
                        0.95
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
                <Link to="/">
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

export default ICSigma;
