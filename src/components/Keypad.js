// Code Keypad Component Here
import React from 'react';

function Keypad() {
    const onPasswordChange = () => {
        console.log('Entering password...')
    }
    return (
        <>
            <input onChange={onPasswordChange} type='password'/>
        </>
    );
}

export default Keypad;