import React, { Component } from "react";
import { render } from 'react-dom'

const App = () =>
{
  return (
    <h1>Testing React Code</h1>
    )
}
 
export default App;

const appDiv = document.getElementById("app")
render(<App />, appDiv)