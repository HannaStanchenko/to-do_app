import React, {useEffect, useState} from 'react';
import CreateTask from './CreateTask';
import BoxForTask from './taskBox/BoxForTask';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const [taskBox, setTaskBox] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if(arr) {
            let obj = JSON.parse(arr);
            setTaskBox(obj)
        }
    }, []);

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) => {
        let tempList = taskBox;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskBox(tempList);
        setModal(false);
    };

    const deleteTask = (i) => {
        let tempList = taskBox;
        tempList.splice(i, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskBox(tempList);
        window.location.reload();
    };

    const updateListArray = (obj, i) => {
        let tempList = taskBox;
        tempList[i] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskBox(tempList);
        window.location.reload();
    };

    const showMessage = () => {
        if(taskBox.length === 0) return "You've done all tasks";
        return (
            taskBox && taskBox.map((obj, i) => <BoxForTask taskObj={obj} index={i} deleteTask={deleteTask} updateListArray={updateListArray} key={i} />)
        );
    };

    return (
        <>
            <div className="header d-flex justify-content-center align-items-center p-4">
                <div className='d-flex flex-column align-items-center'>
                    <h3>TO-DO LIST</h3>
                    <button className="btn btn-light mt-1" onClick={() => setModal(true)}>Create Task</button>
                </div>
            </div>
            <div className="task-container d-flex justify-content-center align-content-start flex-wrap">
                {showMessage()}
            </div>
             
            <CreateTask modal={modal} toggle={toggle} save={saveTask} />
        </>
    );
};

export default ToDoList;