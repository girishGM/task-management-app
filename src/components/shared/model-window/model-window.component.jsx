import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export const ModelWindow = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const addTask = (title) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title })
    };
    fetch('https://task-management-service.herokuapp.com/tasks', requestOptions)
        .then(response => response.json())
        .then(res => res.result );
  }

  return (
    <div>
      <button className='button' onClick={onOpenModal}>{props.buttonText}</button>
      <Modal open={open} onClose={onCloseModal} center>
          <div >
            <h5>{props.modelHeading} </h5>
                <div className='row' style={{padding:'10px'}}>
                    <input type='text' name='title'></input>
                </div>
                <div className='row' style={{alignText:'center'}}>
                    <button className='button' onClick={onCloseModal}>{props.modelHeading}</button>    
                </div>    
            </div>
                
      </Modal>
    </div>
  );
};
