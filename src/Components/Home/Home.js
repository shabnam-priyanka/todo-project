import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';


const Home = (props) => {
   const {storeText, setStoreText} = props;
    console.log(storeText);
        const [textInput, setTextInput] = useState('');
       
        const handleText = (e) => {
            e.preventDefault();
            setTextInput(e.target.value)
            
        }

        const handleSubmit = () =>{
            setStoreText([...storeText, textInput]);
        }

    return (
        <div>
            <Header></Header>
            <input type="text" name="text" id=""  onChange= {handleText} />
            <input type="button" value="submit" onClick={handleSubmit} />

            <div className="homeStyle">
            {
                storeText.map((a , index) => {
                    return <li key = {index}><button >Delete</button>
                    <button >Complete</button> 
                    <span className='style'> {a}</span> 
                    
                    </li>;
                })
            }
            </div>
        </div>
    );
};

export default Home;