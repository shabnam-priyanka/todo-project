import React from 'react';
import Header from '../Header/Header';

const DeletedProjects = (props) => {
    const {deletedItems} = props;


    return (
        <div>
            <Header></Header>
            {
                deletedItems.map((a) => {
                    return <li key={a.myKey} >{a.title} </li>
                })
            }
          
            
        </div>
    );
};

export default DeletedProjects;