import { FaUniversity } from 'react-icons/fa'

import './ExperienceElement.css'

function ExperienceElement() {
    return (
        <div className="exp-element-container">
            <div className="exp-element-image">
                <FaUniversity size={ 80 }/>
            </div>
            <div className="exp-element-text">
                <h5>Placeholder position</h5>
                <p>Placeholder location</p>
                <p>Placeholder time</p>
            </div>
            </div> 
     );
}

export default ExperienceElement;