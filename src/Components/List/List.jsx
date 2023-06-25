import { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import { getCollection } from '../../Services/getCollection';

function List({url}) {
    const [elements, setElements] = useState([]);

    useEffect(()=>{
        const result = async () =>{
            try{
                const response = await getCollection(url);

                setElements(response.docs);

                elements.map((element) => console.log(element.data()));
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

            </Card.Body>
        </Card>
    );
}

export default List;