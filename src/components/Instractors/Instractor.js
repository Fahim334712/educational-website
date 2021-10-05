import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import LoadData from '../LoadData/LoadData';
import './Instractor.css';

const Instractor = () => {
    const [datas, setDatas] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <h2 className="m-4">Our Experience Instractors Panel Here :</h2>
            <div className="DataGrid container">
                {
                    datas.map(data => <LoadData key={data._id} data={data}></LoadData>)
                }

            </div>
            <Button onClick={handleClick} variant="success mb-5">Back to Home</Button>
        </div>
    );
};

export default Instractor;