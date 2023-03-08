
import { 
    Card, 
    Placeholder,
    Stack
} from "react-bootstrap";

import ElementLoading from "../../Components/Experience/ElementLoading";

function ProyectsLoading() {

    const spawnLoadingItems = () => {
        const quantity = 0
        const loadingItems = []
  
        for (let i = 0; i <= quantity; i++) {
          loadingItems.push(<ElementLoading/>)
        }
  
        return loadingItems
      }

    return (
        <Card>
            <Card.Body>

                        <Card.Title>

                            <Placeholder as={Card.Title} animation='glow'>
                                <Placeholder xs={4}/>
                            </Placeholder>

                        </Card.Title>


                    <Stack direction="vertical" gap={3}>
                            {spawnLoadingItems()}
                    </Stack>

                <hr/>
            </Card.Body>
        </Card>
    );
}


export default ProyectsLoading;