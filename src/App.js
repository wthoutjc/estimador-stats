//import './css/App.css';
import React, {Component} from "react";

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//MathJAX
import { MathComponent } from "mathjax-react";

//Temario
import EstimadorPuntual from "./Temario/EstimadorPuntual.js";
import ICMuestraGrande from "./Temario/ICMuestraGrande.js";
import ICMuestraPequena from "./Temario/ICMuestraPequena.js";
import ICSigma from "./Temario/ICSigma.js";


//Componentes EstimadorPuntual:
import EPApp1 from './components/c_ep/App1.js';
import EPApp2 from "./components/c_ep/App2.js";
import EPApp3 from "./components/c_ep/App3.js";
import EPApp4 from "./components/c_ep/App4.js";

//Componentes ICMuestraGrande:
import ICMGApp1 from './components/c_icmg/App1.js';
import ICMGApp2 from "./components/c_icmg/App2.js";
import ICMGApp3 from "./components/c_icmg/App3.js";
import ICMGApp4 from "./components/c_icmg/App4.js";

//Componentes ICMuestraPequeña:
import ICMPApp1 from './components/c_icmp/App1.js';
import ICMPApp2 from "./components/c_icmp/App2.js";

//css
import './index.css'

class App extends Component {

  state = {
    raiz: false,
  };

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/icmp/app1">
            <ICMPApp1/>
          </Route>
          <Route path="/icmp/app2">
            <ICMPApp2/>
          </Route>
          <Route path="/icmg/app1">
            <ICMGApp1/>
          </Route>
          <Route path="/icmg/app2">
            <ICMGApp2/>
          </Route>
          <Route path="/icmg/app3">
            <ICMGApp3/>
          </Route>
          <Route path="/icmg/app4">
            <ICMGApp4/>
          </Route>
          <Route path="/ep/app1">
            <EPApp1/>
          </Route>
          <Route path="/ep/app2">
            <EPApp2/>
          </Route>
          <Route path="/ep/app3">
            <EPApp3/>
          </Route>
          <Route path="/ep/app4">
            <EPApp4/>
          </Route>
          <Route path="/ep">
            <EstimadorPuntual/>
          </Route>
          <Route path="/icmg">
            <ICMuestraGrande/>
          </Route>
          <Route path="/icmp">
            <ICMuestraPequena/>
          </Route>
          <Route path="/ics">
            <ICSigma/>
          </Route>
          <Route exact path="/">
            <div className="App">
              <table className="table table-striped table-hover table-bordered my-1">

                {/* CABEZA */}

                <thead className="thead-dark">
                  <tr>
                    <th scope="col">TÍTULO</th>
                    <th scope="col" className="text-center">CONTENIDO</th>
                  </tr>
                </thead>

                {/* CUERPO: Apps 1-4*/}
                
                <tbody>

                  {/* App 1: */} 

                  <tr>
                    <th scope="col">
                      <p className="h6">cap.8.3: tabla.8.1 & cap.8.4</p> Evaluación de la bondad de un estimador puntual.
                    </th>
                    <td>
                      <Link to="/ep">
                        <button 
                          type="button" 
                          className="btn btn-sm btn-success"
                        >IR</button>
                      </Link>
                    </td>
                  </tr>

                  {/* App 2: */}

                  <tr>
                    <th scope="col">
                    <p className="h6">cap.8.6</p>Intervalos de confianza en una muestra grande
                    </th>
                    <td>
                      <Link to="/icmg">
                        <button 
                          type="button" 
                          className="btn btn-sm btn-success"
                        >IR</button>
                      </Link>
                    </td>
                  </tr>

                  {/* App 3: */}

                  <tr>
                    <th scope="col">
                    <p className="h6">cap.8.8</p>
                      <p>Intervalos de confianza de una muestra pequeña para </p>
                      <p><MathComponent tex={String.raw`\mu \ \ y \ \ \mu_1 - \mu_2\ `} /></p>
                    </th>
                    <td>
                      <Link to="/icmp">
                        <button 
                          type="button" 
                          className="btn btn-sm btn-success"
                        >IR</button>
                      </Link>
                    </td>
                  </tr>

                  {/* App 4: */}

                  <tr>
                    <th scope="col">
                    <p className="h6">cap.8.9</p>
                      <p>Intervalos de confianza para </p>
                      <p><MathComponent tex={String.raw`\sigma^2\ `} /></p>
                    </th>
                    <td>
                      <Link to="/ics">
                        <button 
                          type="button" 
                          className="btn btn-sm btn-success"
                        >IR</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Route>
          <Route path="*">
            <h1> 404 Not Found </h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
