import React from 'react';
import Father from './Father';
import { FamilyContext } from '../context/FamilyContext';

// grandfather -> child한테 정보를 주고 child 가 출력
function GrandFather() {
    const houseName = 'park';
    const money = 10000;
    return (
        <FamilyContext.Provider value={{ houseName, money }}>
            <Father></Father>
        </FamilyContext.Provider>
    );
}
export default GrandFather;
