import React from 'react'
import { useState } from 'react'
import './styles/Task.css'

function Task({idLS ,title, content}) {
    let tmp_obj = JSON.parse(localStorage.getItem(idLS + "_f"));
    const [isDone, setIsDone] = (tmp_obj == null) ? useState(false) : useState(tmp_obj.done);
    const [doesExist, setDoesExist] = useState(true);

    function handleCheckBox() {
        if (isDone === true) { 
            setIsDone(false);
            let tmp = { done: false };
            localStorage.setItem(String(idLS) + "_f", JSON.stringify(tmp));
        }
        else { 
            setIsDone(true);
            let tmp = { done: true };
            localStorage.setItem(String(idLS) + "_f", JSON.stringify(tmp));
        }
    }

    function handleDeleteTask(idLS) {
        localStorage.removeItem(idLS + "_k");
        localStorage.removeItem(idLS + "_f");
        setDoesExist(false);
    }

    return (
        (doesExist) &&
        <>
            <div className='Task' style={isDone ? {backgroundColor: '#d5c5fa', boxShadow: 'none'} : {}}>
                <div className='Task-content'>
                    <h1 style={isDone ? {textDecoration: 'line-through'} : {}}>{title}</h1>
                    <p style={isDone ? {textDecoration: 'line-through'} : {}}>{content}</p>
                </div>
                <input type='checkbox' onChange={handleCheckBox} checked={isDone}></input>
                <button onClick={() => handleDeleteTask(idLS)}></button>
            </div>
        </>
    )
}

export default Task;