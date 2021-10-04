
import './LoadData.css';

const LoadData = (props) => {
    const { name, picture, qualification } = props.data;

    return (
        <div>
            <div className="data">
                <div>
                    <img className="image" src={picture} alt="" />
                </div>
                <div>
                    <h5>Name: {name}</h5>
                    <h5>Qualification :{qualification}</h5>
                </div>
            </div>

        </div>
    );
};

export default LoadData;