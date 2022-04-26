// Code EyesOnMe Components
import React from 'react';

function EyesOnMe(props) {
    const onFocusAction = () => {
        console.log('Good!')
    }

    const onBlurAction = () => {
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <>
            <button onFocus={onFocusAction} onBlur={onBlurAction}>Eyes on me</button>
        </>
    );
}

export default EyesOnMe;