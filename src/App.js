import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from './components/jumbo.js';
import './index.css';
import '../src/components/table.js'
// import Table from '../src/components/table.js';
import Table from '../src/components/MusicList.js';
import Search from './components/search.js';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="Jumbo">
      <header>
      <Navbar />
      <Jumbo />
      </header>
      <body>
{/* <MusicList></MusicList> */}
<Table />
{/* <BootstrapTable></BootstrapTable> */}
      </body>
    </div>
  );
}

export default App;


