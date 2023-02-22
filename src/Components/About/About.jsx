import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import AboutLoading from "./AboutLoading.jsx";
import { getData } from "../../Services/getData.js";

function About() {
    const [isLoading, setIsLoading] = useState(true)
    const [aboutText, setAboutText] = useState("");

    useEffect(() =>{
        
        const result = async () => {

            try{
                const responseData = await getData("about-data")

                setAboutText(responseData.data().about)

                setIsLoading(false)

            }catch(error){
                console.log(error)
            }
        }
 
        result()

    }, [])

    if(isLoading){
        return(
            <AboutLoading/>
        )
    }else{
        return (
            <>
            <Card>
                <Card.Body>

                    <div className="justify-spacebetween">

                        <Card.Title>
                            About me
                        </Card.Title>

                    </div>

                    <Card.Text>
                        {aboutText}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </> 
        );
    }
}

export default About;