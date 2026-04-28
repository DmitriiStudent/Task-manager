import React from 'react'
import { useState } from 'react'
import './styles/GreetingApp.css'

function GreetingApp({ date, setDate, onClose }) {

    return (
        <section className = 'GreetingWindow'>
            <div>
                <h1>Выберите дату</h1>
                {/*<button onClick = { onClose }>Дата</button>*/}
                <input type="date" 
                value = {date} 
                onChange={(e) => { 
                        setDate(e.target.value); 
                        console.log(e.target.value);
                        onClose();
                    }}  
                />
            </div>
        </section>
    )
}

export default GreetingApp;