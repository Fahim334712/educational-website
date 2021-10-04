
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DisplayHome from '../DisplayHome/DisplayHome';
import './Home.css';

const Home = () => {
    const [homes, setHomes] = useState([]);
    const courses = useHistory();
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => setHomes(data));
    }, [])
    const handleCourses = () => {
        courses.push('./courses');
    }
    return (
        <div className="photoGrid container">

            <div>
                <h2>Available Courses are :</h2>
                {
                    homes.map(home => <DisplayHome key={home._id} home={home}></DisplayHome>)
                }
            </div>
            <div className="mt-5">
                <img className="imSize" src="./images/fav.png" alt="" />
            </div>
            <Button onClick={handleCourses} variant="success">See all Courses</Button>
        </div>
    );
};

export default Home;