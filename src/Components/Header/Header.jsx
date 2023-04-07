import { 
    useEffect, 
    useState 
} from 'react'
import { 
    Card, 
    Image
} from 'react-bootstrap'

import {getData} from '../../Services/getData'

import HeaderLoading from './HeaderLoading.jsx'
import ContactInfo from '../ContactInfo/ContactInfo.jsx'
import HeaderNav from '../HeaderNav/HeaderNav.jsx'

import styles from './Header.module.css'

import bannerImage from '../../img/bannerImage.jpeg'
import profileImage from '../../img/profileImage.jpg'

function Header() {
    const [isLoading, setIsLoading] = useState(true)
    const [headerData, setHeaderData] = useState({name:'', ocupation:'', location:'', telephone:'', email: ''})

    useEffect(() =>{
        const  response = async () => {

            try{

                const responseData = await getData("header-data")

                setHeaderData(responseData.data())

                setIsLoading(false)
                
            }catch(error){
                console.log(error)
            }
        }

        response()

    }, [])



    if(isLoading){
        return(
            
            <HeaderLoading/>

        )
    }else{
        return (
            <>
            <div className={styles.headerProfile}>

                <Card className={styles.headerCard}>

                    <div className={styles.imageContainer}>

                        <Card.Img className={`${styles.box} ${styles.imageBanner}`} variant="top" src={bannerImage}/>

                        <Image className={`${styles.box} ${styles.imageProfile}`} src={profileImage} roundedCircle></Image>

                    </div>

                    <div className={styles.bodyProfile}>

                        <Card.Body >

                            <div className="justify-spacebetween">

                                <Card.Title>{headerData.name}</Card.Title>

                            </div>

                            <Card.Subtitle>{headerData.ocupation}</Card.Subtitle>
                            
                            <Card.Text>
                                {headerData.location}
                            </Card.Text>

                            <ContactInfo telephone={headerData.telephone} email={headerData.email}/>
                            
                        </Card.Body>

                    </div>

                    <HeaderNav/>

                </Card>
            </div>

            </>
        )}
}

export default Header;