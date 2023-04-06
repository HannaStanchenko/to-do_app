import React, { useState } from 'react';
import './BoxForTask.css'
import EditTask from '../EditTask';

const BoxForTask = ({taskObj, index, deleteTask, updateListArray, doneTaskFunk}) => {
    const [modal, setModal] = useState(false);
    
    const handlerDelete = () => deleteTask(index);
    const toggle = () => setModal(!modal);
    const updateTask = (obj) => updateListArray(obj, index);

    return (
        <div className="card-wrapper d-flex flex-column">
            <div className="card-top"></div>  
            <div className="task-holder mw-100 d-flex flex-column">
                <span className="card-header ">{taskObj.name}</span>
                <p>{taskObj.description}</p>
                <div className="card-bottom d-flex justify-content-end gap-2">
                    <i className="far fa-edit" onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" onClick={handlerDelete} ></i>

                </div>
            </div>
            
            <EditTask modal={modal} toggle={toggle} update={updateTask} taskObj={taskObj} />       
        </div>
    );
};

export default BoxForTask;