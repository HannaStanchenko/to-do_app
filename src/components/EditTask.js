import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, update, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        };
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj.name = taskName;
        tempObj.description = description;
        update(tempObj);
    };

    useEffect(() => {
        setTaskName(taskObj.name); 
        setDescription(taskObj.description); // eslint-disable-next-line
    }, []);

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                <Button color="primary" onClick={handleUpdate}>
                    Update
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;