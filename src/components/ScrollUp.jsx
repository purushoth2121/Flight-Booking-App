import React from 'react';
import React, { useState, useEffect } from 'react'

const ScrollUp = () => {

    const [isVisible, setisVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setisVisible(true);
        } else {
            setisVisible(false);
        }
    };1
    const ScrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    } ,[]);

    return (
        <div>
            <button onClick={ScrollUp} 
            style={{
                display: isVisible ? 'block' : 'none',
                width: '40px',
                height: '40px',
                fontWeight: 'bold',
                position: 'fixed',
                bottom: '20px',
                right: '30px',
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                // border: 'solid 2px black',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
                zIndex: 1000,
            }}
            >
            ⮝
            </button>
        </div>
    )
}
export default ScrollUp;