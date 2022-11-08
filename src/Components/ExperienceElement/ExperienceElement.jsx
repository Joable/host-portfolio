import { FaUniversity } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'

import './ExperienceElement.css'

function ExperienceElement() {
    return (
        <div className="exp-element-container">
            <div className="exp-element-image">
                <FaUniversity size={ 80 }/>
            </div>
            <div className="exp-element-text">
                <div className='text-position'>
                    <h5>Placeholder position</h5>
                    <BsPencilSquare/>
                </div>
                <p>Placeholder location</p>
                <p>Placeholder time</p>
            </div>
            </div> 
     );
}

export default ExperienceElement;