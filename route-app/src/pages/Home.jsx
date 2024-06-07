import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div>Home</div>
            <br />
            <button
                onClick={() => {
                    navigate('/works');
                }}
            >
                works로 이동
            </button>
            <Link to='/Contact'>contact 페이지로 이동하기</Link>
        </>
    );
}

export default Home;
