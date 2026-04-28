import React from 'react'
import { useState } from 'react'
import './styles/AddTaskApp.css'

function AddTaskApp({ onAdd, onClose, currentDate }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAdd = () => {
        if (title.trim() === '' || content.trim() === '') {
            alert('Пожалуйста, заполните оба поля');
            return;
        }
    
        onAdd(title, content, currentDate);
        setTitle('');
        setContent('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleAdd();
        }
    };

    return (
        <section className = 'addTask-background'>
            <div className = 'addTask'>
                <div className = 'addTask-inputBlock'>
                    <input className = 'addTask-headerInput' 
                        type='text'
                        placeholder='Название задачи'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                    <input className = 'addTask-contentInput' 
                        type='text'
                        placeholder='Описание задачи'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className = 'addTask-buttonsBlock'>
                    <button onClick={handleAdd}>Добавить</button>
                    <button onClick={onClose}>Отмена</button>
                </div>
            </div>
        </section>
    )
}

export default AddTaskApp;