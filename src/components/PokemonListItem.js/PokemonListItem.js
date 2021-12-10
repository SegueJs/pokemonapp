import { Card, Col } from "react-bootstrap";

export default function PokemonListItem ({name, url}) {


    const getId = () => url.split("/")[6];
    return(
        <Col xs md="auto" >
            <Card className="m-3" border="secondary" style={{width: '18rem'}} >
            <Card.Header>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId()}.png`} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {`This is ${name} say hello! :)`}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}