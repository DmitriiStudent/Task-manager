import React from 'react'
import { useState } from 'react'
import Task from './Task'
import './styles/TasksApp.css'

function TasksApp({ date, setDate, onOpenAddTask, tasks, openDate, openPrevDay, openNextDay }) {

    return (
        <section>
            <nav>
                <a className = 'nav-addNewTask' onClick = {onOpenAddTask}>Добавить задачу</a>
                <div className = 'nav-navBlock'>
                    <a onClick = {openPrevDay}> &larr; </a>
                    <input type="date" 
                        value = {date} 
                        onChange={(e) => { 
                            setDate(e.target.value); 
                            console.log(e.target.value);
                        }}  
                    />
                    <a onClick={openNextDay}> &rarr; </a>
                </div>
            </nav>
            <div className = 'list-task'>
                {
                    tasks.map(
                        task => (
                            <Task 
                                key = {task.id}
                                idLS = {task.idLS}
                                title = {task.title}
                                content = {task.content}
                            />
                        )
                    )
                }
            </div>
        </section>
    );
}

export default TasksApp;