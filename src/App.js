import React from 'react';
import './App.css';

import Left from "./components/left/left.js";
import Middle from "./components/middle/middle.js";
import Right from "./components/right/right.js"

function App() {
  return (
    <div class="container-fluid" >
      <div class="row" style={{height: "100vh"}}>
        <div class="col-3 border border-left-0 border-top-0 border-bottom-0 border-right-3 p-0">
          <Left/>
        </div>

        <div class="col-6 border border-left-0 border-top-0 border-bottom-0 border-right-3 p-0">
          <Middle/>
        </div>

        <div class="col-3 p-0">
          <Right/>
        </div>
      </div>
    </div>
  );
}

export default App;