import './index.css';
import React from 'react';
import Menu from './Menu.js';
import { useState } from 'react';
import items from './data.js';
import Category from './Category.js';
function App() {
  // const [itoms,setitems]=useState(items);
  let  [ctgry,setctgry]=useState('All')

  return (
    <>
      <section>
        <div className="logof">Supub</div>
        <div className="logos">Cafe</div>
        <div className="welcome" >
        <p>What you want to have today</p>
        </div>
      </section>
      <div className="menu"> <h2>Menu</h2></div>
      <div className="und"></div>
      <Category setctg={setctgry}/>
      <Menu itoms={items} ctg={ctgry} />

    </>
  );
}

export default App;
