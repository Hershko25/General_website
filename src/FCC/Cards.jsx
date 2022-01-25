
import '../Css/CardsZoom.css'
import { Card, Button } from 'react-bootstrap';


export default function Cards(props) { //Product card
    return (
        <Card  className="cardzoom">
            <img style={{ width: "100%", height: "15vw", objectFit: 'cover' }} src={props.test.url} alt="" />
            <Card.Body>
                <Card.Title >{props.test.name}</Card.Title>
                <Card.Text>
               
                </Card.Text>
                <Button variant="primary" >Buy in {props.test.Price}</Button>
            </Card.Body>
        </Card>
    )
}