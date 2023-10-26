'use client';

import styles from '../css/input.module.css'
import React, { useState } from 'react'

export default function Input(){

    const [email, setEmail] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/
        if(regex.test(email)){
            const options = {
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({ email }),
            }
            fetch(`http://localhost:9999/info`, options)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
            })
        }
        else{
            console.log(`it is invalid email!`)
        }      
    }

    return(
        <div className={styles.inputcontainer}>
            <div className={styles.inputwrapper}>
                <input 
                    type='email'
                    value={email}
                    onChange={handleEmail}
                    className={styles.input}
                    placeholder='Enter your email here...'
                />
            </div>
            <button onClick={handleSubmit} className={styles.btn}>Subscribe</button>
        </div>
    )
}