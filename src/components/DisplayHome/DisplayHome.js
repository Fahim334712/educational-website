import React from 'react';
import { Button } from 'react-bootstrap';
import './DisplayHome.css';

const DisplayHome = (props) => {
    const { course, picture, fee, category } = props.home;


    return (
        <div>
            <div className="homeDisplay" >
                <div >
                    <h6 className="aligns">Course Title: {course}</h6>
                    <h6 className="aligns">Course fee : {fee}</h6>
                    <h6 className="aligns">Category : {category}</h6>
                </div>
                <div>
                    <img className="imgSize" src={picture} alt="" />
                </div>
                <Button variant="secondary m-1">Buy</Button>
            </div>

        </div>
    );
};

export default DisplayHome;