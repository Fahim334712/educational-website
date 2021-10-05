import React from 'react';
import { Button } from 'react-bootstrap';
import './CourseDisplay.css';

const CourseDisplay = (props) => {
    const { fee, picture, course, category } = props.course;
    return (
        <div >
            <div className="theFlex">
                <div>
                    <h6 className="aligns">Course Title : {course}</h6>
                    <h6 className="aligns">Course fee : {fee}</h6>
                    <h6 className="aligns">Category : {category}</h6>
                </div>
                <div>
                    <img className="imagesize" src={picture} alt="" />
                </div>
            </div>
            <Button variant="secondary px-5">Buy</Button>
        </div>
    );
};

export default CourseDisplay;