import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css';

const Contact = () => {

    const btn = useHistory();
    const handlebtn = () => {
        btn.push('./home');
    }
    return (
        <div className="container mt-4">
            <h4>We Have 6 Branches</h4>
            <div className="thegrid mt-3">
                <div>
                    <h6>1.Chattogram Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
                <div>
                    <h6>2.Dhaka Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
                <div>
                    <h6>3.Sylhet Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
                <div>
                    <h6>4.Rajshahi Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
                <div>
                    <h6>5.Gazipur Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
                <div>
                    <h6>6.Coxs Bazar Branch</h6>
                    <p className="thetext">
                        Address : 3 no. road,Chawbazr ctg<br />
                        Mobile  : 018756654 <br />
                        Email   : f.hgghg@gmail.com
                    </p>
                </div>
            </div>
            <Button onClick={handlebtn} variant="success mb-3 mt-1">Back To Home</Button>
        </div>
    );
};

export default Contact;