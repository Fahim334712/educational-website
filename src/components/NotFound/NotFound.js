import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const backC = useHistory();
    const backClick = () => {
        backC.push('./home');
    }
    return (
        <div>

            <img variant="m-5" src="./images/not.png" alt="" />
            <Button onClick={backClick} variant="success m-5">Back To Home</Button>
        </div>
    );
};

export default NotFound;