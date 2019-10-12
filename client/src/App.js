// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Pets>insert links to mvc folders/files here</Pets>
//       </header>
//     </div>
//   );
// }

// export default App;

//***********************************Code below from example activity****************************
import React from "react";
// import Pets from "./pages/Pets";
import Nav from "./components/nav";


function App() {
  return (
    <div>
      <Nav />
      {/* <Pets /> */} 
    </div>
  );
}

export default App;
