import React from 'react';
import { useNavigate } from 'react-router-dom';

function Works() {
    const navigate = useNavigate();

    return (
        <>
            <div>Works</div>
            <br />
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home으로 이동
            </button>
        </>
    );
}

export default Works;
