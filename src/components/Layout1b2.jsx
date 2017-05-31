import React, { Component } from 'react';
import Tabs2 from "./Tabs2.jsx"
import { parseCode } from '../lib/js2blocks.js';

class Layout1b2 extends Component {
  componentDidMount() {
    console.log("Layout1b2")
  }
  copyEd2_Ed1(){
    console.log("copyEd2_Ed1")
   
   window._BIDE.code = window._BIDE.blockly_code;
    window._BIDE.editor1.setValue(window._BIDE.code);
 
    parseCode(window._BIDE.code)
    window._BIDE.code_prev = window._BIDE.code;
  }
  bi_run(){
    console.log("bi_run")
    try{
      //bi_console1_clear();
      //bi_pane1_clear();
      eval(window._BIDE.blockly_code);
    }
    catch(err){
      //bi_console1.value += err;
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.copyEd2_Ed1}>SYNC: JS Editor &lt;- JS Generated</button>
          <button onClick={this.bi_run}>RUN: JS Generated</button>
        </div>
        <Tabs2 />
      </div>
    );
  }
}

export default Layout1b2;
