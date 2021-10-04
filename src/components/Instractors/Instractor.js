import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import LoadData from '../LoadData/LoadData';

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
            <h2>This is Instractors</h2>
            <div className="DataGrid">
                {
                    datas.map(data => <LoadData key={data._id} data={data}></LoadData>)
                }

            </div>
            <Button onClick={handleClick} variant="success mb-5">Back to Home</Button>
        </div>
    );
};

export default Instractor;