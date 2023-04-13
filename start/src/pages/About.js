import React from 'react';
import { useParams } from 'react-router-dom';

function About(props) {
    let { userId } = useParams();
    return (
        <div>
            <h1>UserId là: {userId}</h1>
        </div>
    );
}

export default About;