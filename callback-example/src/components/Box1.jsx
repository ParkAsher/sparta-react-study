import React from 'react';

function Box1({ initCount }) {
    console.log('box1 컴포넌트가 랜더링 되었습니다.');

    const style = {
        width: '100px',
        height: '100px',
        backgroundColor: '#01c49f',
        color: 'white',
    };

    const onInitButtonClickHandler = () => {
        initCount();
    };

    return (
        <div style={style}>
            <button onClick={onInitButtonClickHandler}>초기화</button>
        </div>
    );
}

export default React.memo(Box1);
