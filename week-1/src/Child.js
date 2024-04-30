import React from 'react';

function Child({ age, name, children }) {
    console.log(age, name, children);
    return <div>Child</div>;
}

// 부모 컴포넌트로 부터 아직 Props 값을 받지 못했을 때, 임시로 값을 채울 수 있다.
// Props 가 전달되면 진짜 Props 값으로 변경된다.
Child.defaultProps = {
    name: '기본 이름',
};

export default Child;
