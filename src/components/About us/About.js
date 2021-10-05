import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './About.css';

const About = () => {
    const clicks = useHistory();
    const click = () => {
        clicks.push('./home');
    }
    return (
        <div className="theColor p-1 mt-2 container">
            <h6 className="mt-3 mb-3">In addition to the studies of our educational institution, academic activities and skill development work is done.We are working on skill development as well as academic studies in Bangladesh.Young people in Bangladesh face a precarious future, despite living in one of the world’s fastest growing economies. A third of Bangladesh’s population is 10-24 years old and 2.2 million young people enter its workforce every year. Three out of every four business leaders report that skilled workers are scarce, while approximately ten million young people are currently unemployed or underemployed.</h6>
            <Button onClick={click} variant="success m-3">Back To Home</Button>
        </div>
    );
};

export default About;