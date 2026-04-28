import React, { useState, useEffect } from 'react'
import GreetingApp from './GreetingApp';
import TasksApp from './TasksApp';
import AddTaskApp from './AddTaskApp';

function App() {
    const [showGreeting, setShowGreeting] = useState(true);
    const [showAddTask, setShowAddTask] = useState(false);
    const [date, setDate] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!date) return;
        
        let tasksArr = [];
        let keys = Object.keys(localStorage);
        for (let i of keys) {
            if (i.slice(i.length - 2, i.length) === '_k') {
                let tmp = JSON.parse(localStorage.getItem(i));
                if (tmp.date === date) {
                    tasksArr.push(tmp);
                }
            }
        }
        tasksArr.sort((a, b) => a.id - b.id);
        setTasks(tasksArr);
    }, [date]);

    function onOpenAddTask() {
        setShowAddTask(true);
    }
    
    function onClose() {
        setShowAddTask(false);
    }

    function addNewTask(title, content, taskDate) {
        const newTask = {
            id: Date.now(),
            idLS: Date.now(),
            title: title,
            content: content,
            date: taskDate,
        };
        
        localStorage.setItem(String(newTask.idLS) + "_k", JSON.stringify(newTask));
        localStorage.setItem(String(newTask.idLS) + "_f", JSON.stringify({ done: false }));
        
        if (taskDate === date) {
            setTasks([...tasks, newTask]);
        }
        
        setShowAddTask(false);
    }

    return (
        <div>
            { showGreeting ? (
                <GreetingApp date={date} setDate={setDate} onClose={() => setShowGreeting(false)} />
            ) : (
                <TasksApp date = {date} setDate = {setDate} onOpenAddTask={onOpenAddTask} tasks={tasks} />
            )}
            { showAddTask && <AddTaskApp onClose={onClose} onAdd={addNewTask} currentDate={date} /> }
        </div>
    );
}

export default App;