import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        let {name, value} = e.target;
        if(name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        };
    };

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj.name = taskName;
        taskObj.description = description;
        save(taskObj);
        setTaskName("");
        setDescription("");
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control mt-2" value={taskName} onChange={handleChange} name="taskName" maxLength={25} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Description</label>
                        <textarea rows="3" className="form-control mt-2" value={description} onChange={handleChange} name="description" maxLength={104} ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;