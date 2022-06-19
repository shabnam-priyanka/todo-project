import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';


const Home = (props) => {
   const {storeText, setStoreText,  deletedItems, setDeletedItems ,completedItem, setCompletedItem} = props;
    const initialState = {title: '', isComplete: false};
        const [textInput, setTextInput] = useState(initialState); // input field e ja put kora hoche ta ei state e object akare store kora hoche
    
        const handleText = (e) => {
            e.preventDefault(); 
            const titleCopy = {...textInput}; // empty initialState copy of object title & iscomplete kore rakche titleCopy r vitor
            titleCopy.title = e.target.value; // e.target.value input field ja put korbe oita title er vitor put kora hoche 
            titleCopy.myKey = new Date() * 1; // ekta unique key create kora hoche 
            setTextInput(titleCopy)
            
        }

        const handleSubmit = () =>{
            setStoreText([...storeText, textInput]); // storeText empty thakche prothome than textInput ja asche add hoche storeText e
            setTextInput(initialState); // form empty korar jonno setTextInput er vitor initialState put kora
        }

        const handleDelete = (uniqueKey) => {
            const deleteItem = storeText.filter((a) => {
                return a.myKey !== uniqueKey; // get all object except uniquekey 
            })
            const storeDeleteItem = storeText.find((a) =>{
                return a.myKey === uniqueKey; // delete howar ag muhurte find kore rakche kon object ta delete hoye jache
            } ) 
            // isComplete jodi false hoy tahole deletedItems state e dhukbe
            if (storeDeleteItem.isComplete === false) {
                setDeletedItems([...deletedItems, storeDeleteItem]) //deletedItems name useState neya app.js to send info to deletedProject component
            }
            setStoreText(deleteItem); //line number 26 setStoreText er vitore vore deya hoyeche
        }
        const handleComplete = (uniqueKey) => {
            const completeItem = storeText.find((a) => {
                return a.myKey === uniqueKey; //to find object er myKey and uniqueKay same kina then thakle oi object completeItem e rakche
            })
             // isComplete k dhore true kora hoise karon compelete button e click kora hoise
            completeItem.isComplete = true; // line 38 er completeItem er isComplete value from false to true kora hoise

            const position = completedItem.findIndex((a) =>{
                return a.myKey === completeItem.myKey; //findIndex diye check kora hoise completedItem er vitore object ta ase kine thakle plus return na thakle -1
            });
         
            if (position < 0 && completeItem.isComplete === true) {
                setCompletedItem([...completedItem, completeItem]) 
            }
        }
        

    return (
        <div>
            <Header></Header>
            <input type="text" name="text" id="" value={textInput.title} onChange= {handleText} />
            <input type="button" value="submit" onClick={handleSubmit} />

            <div className="homeStyle">
            {
                storeText.map((a ) => {
                   let output;

                   if(a.isComplete === true){
                        output =  <li key = {a.myKey}><button onClick={() => handleDelete(a.myKey)}>Delete </button> 
                    <button onClick={() => handleComplete(a.myKey)}>Complete</button> 
                    <span className='style'> <del className='changeColor'> {a.title} </del></span> 
                    
                    </li>; 
                   }
                   else{
                    output =  <li key = {a.myKey}><button onClick={() => handleDelete(a.myKey)}>Delete </button> 
                    <button onClick={() => handleComplete(a.myKey)}>Complete</button> 
                    <span className='style'> {a.title}</span> 
                    
                    </li>;
                   }
                    return output;
                
                })
            }
            </div>
        </div>
    );
};

export default Home;