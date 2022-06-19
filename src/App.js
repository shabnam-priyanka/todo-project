
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import CompleteProject from './Components/CompleteProject/CompleteProject';
import DeletedProjects from './Components/DeletedProjects/DeletedProjects';
import { useState } from 'react';


function App() {
  const [storeText, setStoreText] = useState([]); //main array jekhane sob store kora hoche form er info
  const [deletedItems, setDeletedItems] = useState([]); // storeText theke ja delete ei array store kora hoche and deleted component e show kora hoche
  const [completedItem, setCompletedItem] = useState([]); // storeText theke je sob object er isComplete true hoche oi gula ei khan e store kora hoche

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home storeText = {storeText} setStoreText = { setStoreText} 
      deletedItems ={deletedItems} setDeletedItems = {setDeletedItems}
      completedItem = {completedItem} setCompletedItem = {setCompletedItem}
      />} />
      <Route path="/complete" element={<CompleteProject  completedItem = {completedItem} />} />
      <Route path="delete" element={<DeletedProjects deletedItems = {deletedItems}/>} />
    </Routes>
    </div>
  );
}

export default App;
