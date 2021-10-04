import React from 'react';
import './DisplayHome.css';

const DisplayHome = (props) => {
    const { course, picture, fee, category } = props.home;
    return (
        <div>
            <div className="homeDisplay" >
                <div >
                    <h6 className="align">Course Tittle : {course}</h6>
                    <h6 className="align">Course fee : {fee}</h6>
                    <h6 className="align">Category : {category}</h6>
                </div>
                <div>
                    <img className="imgSize" src={picture} alt="" />
                </div>
            </div>

        </div>
    );
};

export default DisplayHome;