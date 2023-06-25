import { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import { getCollection } from '../../Services/getCollection';
import ListElement from '../ListElement/ListElement';
import ListLoading from './ListLoading';

function List({url}) {
    const [elements, setElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const result = async () =>{
            try{
                const response = await getCollection(url);

                setElements(response.docs);

                setIsLoading(false);
            }catch(error){
                console.log(error);
            }
        }
        result();
    },[]);

    if(isLoading){
        return(
            <ListLoading/>
        );
    }else{
        return ( 
            <Card>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
    
                    {elements.map((element) => <ListElement element={element.data()}/>)}
                </Card.Body>
            </Card>
        );
    };

}

export default List;