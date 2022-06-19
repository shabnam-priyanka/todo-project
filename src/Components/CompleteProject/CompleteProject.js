
import Header from '../Header/Header';

const CompleteProject = (props) => {
    
    const {completedItem} = props;
  

    return (
        <div>
            <Header></Header>
            {
                completedItem.map((a) => {
                    let anwar;
                    if(a.isComplete === true){
                     anwar = <li key={a.myKey} >{a.title} </li>
                    }
                    return anwar;
                })
            }
        </div>
    );
};

export default CompleteProject;