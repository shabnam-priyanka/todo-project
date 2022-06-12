
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
  const [storeText, setStoreText] = useState([]);

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home storeText = {storeText} setStoreText = { setStoreText} />} />
      <Route path="/complete" element={<CompleteProject />} />
      <Route path="delete" element={<DeletedProjects />} />
    </Routes>
    </div>
  );
}

export default App;
