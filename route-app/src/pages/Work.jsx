import React from 'react';
import { data } from '../shared/data';
import { useParams } from 'react-router-dom';

function Work() {
    const params = useParams();

    // 어떤 to-do 인지 찾아보기
    const foundData = data.find((item) => item.id === parseInt(params.id));

    return (
        <div>
            <h3>할 일 : {foundData.todo}</h3>
        </div>
    );
}

export default Work;
