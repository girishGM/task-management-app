import React from 'react';
import './button.styles.css';

export const Button = props => (

    <button  
        className='button'
        type='button'
        onClick='{props.methodName}'
    >+New Task</button>
)

//<Button methodName={onOpenModal}/>