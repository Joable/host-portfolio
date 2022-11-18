import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { MdDesignServices } from 'react-icons/md'



import './Element.css'

function Element( {element} ) {
    const elementData = element.data()

    return (
        <>
        <hr/>
        <div className="element">
            <div className="element-icon">
                <MdDesignServices size={40}/>
            </div>
            <div className="element-data">
                <Card.Subtitle>{elementData.position}</Card.Subtitle>
                <Card.Text>{elementData.location}</Card.Text>
                <Card.Text>{elementData.from}-{elementData.to}</Card.Text>
            </div>
        </div>
        </>
     );
}

export default Element;