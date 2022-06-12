import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';


const Home = (props) => {
   const {storeText, setStoreText} = props;
    console.log(storeText);
    const initialState = {title: '', isComplete: false};
        const [textInput, setTextInput] = useState(initialState);
       
        const handleText = (e) => {
            e.preventDefault();
            const titleCopy = {...textInput};
            titleCopy.title = e.target.value;
            titleCopy.myKey = new Date() * 1; 
            setTextInput(titleCopy)
            
        }

        const handleSubmit = () =>{
            setStoreText([...storeText, textInput]);
            setTextInput(initialState);
        }

    return (
        <div>
            <Header></Header>
            <input type="text" name="text" id="" value={textInput.title} onChange= {handleText} />
            <input type="button" value="submit" onClick={handleSubmit} />

            <div className="homeStyle">
            {
                storeText.map((a ) => {
                    return <li key = {a.myKey}><button >Delete </button>
                    <button >Complete</button> 
                    <span className='style'> {a.title}</span> 
                    
                    </li>;
                })
            }
            </div>
        </div>
    );
};

export default Home;