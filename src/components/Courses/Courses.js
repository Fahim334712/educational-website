
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CourseDisplay from '../CourseDisplay/CourseDisplay';
import './Courses.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const theCourses = useHistory();
    useEffect(() => {
        fetch('./courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    const handleCourse = () => {
        theCourses.push('./home');
    }

    return (
        <div>
            <h2>This is Courses</h2>
            <div className="theGrid container">
                {
                    courses.map(course => <CourseDisplay key={course._id} course={course}></CourseDisplay>)
                }
            </div>
            <Button onClick={handleCourse} variant="success mt-5 mb-5">Go Back Home</Button>
        </div>
    );
};

export default Courses;