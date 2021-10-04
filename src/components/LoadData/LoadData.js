
import './LoadData.css';

const LoadData = (props) => {
    const { name, picture } = props.data;

    return (
        <div>
            <div className="data">
                <div>
                    <img className="image" src={picture} alt="" />
                </div>
                <div>
                    <p>The name is {name}</p>
                    <p>Qualification : M.sc</p>
                </div>
            </div>

        </div>
    );
};

export default LoadData;