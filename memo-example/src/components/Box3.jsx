import React from 'react';

function Box3() {
    console.log('box3 컴포넌트가 랜더링 되었습니다.');

    const style = {
        width: '100px',
        height: '100px',
        backgroundColor: '#c491be',
        color: 'white',
    };
    return <div style={style}>box3</div>;
}

export default React.memo(Box3);
