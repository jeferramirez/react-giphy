import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import GiftGrid from './components/GiftGrid';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {


  const [categories, setCategory] = useState(['One punch']);

  return (
    <div className="App">
        
        <h1 className="centrar">Gift APP</h1>
        <CategoryAdd setCategory= {setCategory}/>
        {/* <button onClick ={handleAdd}> Agregar</button> */}

        <ol>
           {
             categories.map( (category) => (
              <GiftGrid
               category= {category}
               key={category}
              />
             ))
           }
        </ol>
    </div>
  );
}

export default App;
