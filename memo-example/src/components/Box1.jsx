import React from 'react';

function Box1() {
    console.log('box1 컴포넌트가 랜더링 되었습니다.');

    const style = {
        width: '100px',
        height: '100px',
        backgroundColor: '#01c49f',
        color: 'white',
    };

    return <div style={style}>box1</div>;
}

export default React.memo(Box1);
