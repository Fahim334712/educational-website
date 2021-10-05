import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="all pb-3">
            <div className="color pt-5 mt-5 ">
                <div>
                    <h5 className="align">Contact us</h5>
                    <h6 className="align">Head Office : Chawkbazar,Chittagong</h6>
                    <h6 className="align">Phone : 76567809</h6>
                    <h6 className="align">Email : hg7768@gmail.com</h6>
                </div>
                <div><h6>Following our social Media</h6>
                    <i className="fab fa-facebook m-2"></i><i className="fab fa-instagram m-2"></i><i className="fab fa-youtube m-2"></i><i className="fab fa-twitter m-2"></i>
                </div>
            </div>
            <h6>©Copyrite:Brain Battle
                (Develop by : Fahim)
            </h6>
        </div>
    );
};

export default Footer;