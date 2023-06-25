import { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import { getCollection } from '../../Services/getCollection';
import ListElement from '../ListElement/ListElement';

function List({url}) {
    const [elements, setElements] = useState([]);

    useEffect(()=>{
        const result = async () =>{
            try{
                const response = await getCollection(url);

                setElements(response.docs);

                
            }catch(error){
                console.log(error);
            }
        }
        result();
    },[])

    return ( 
        <Card>
            <Card.Body>
                <Card.Title>Title</Card.Title>

                {elements.map((element) => <ListElement element={element.data()}/>)}
            </Card.Body>
        </Card>
    );
}

export default List;