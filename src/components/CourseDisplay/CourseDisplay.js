import React from 'react';
import './CourseDisplay.css';

const CourseDisplay = (props) => {
    const { fee, picture, course, category } = props.course;
    return (
        <div className="theFlex">
            <div>
                <h6 className="align">Course Title : {course}</h6>
                <h6 className="align">Course fee : {fee}</h6>
                <h6 className="align">Category : {category}</h6>
            </div>
            <div>
                <img className="imagesize" src={picture} alt="" />
            </div>
        </div>
    );
};

export default CourseDisplay;