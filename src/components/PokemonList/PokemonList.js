import { Container, Row, Spinner } from "react-bootstrap";
import usePokemonsStore from "../../stores/pokemon";
import PokemonListItem from "../PokemonListItem.js/PokemonListItem";
import "./styles.css"

export default function PokemonList ({pokemons}) {

    const { isLoading } = usePokemonsStore(state=>({isLoading: state.isLoading}))

    return(
        <Container fluid>
            <Row className="justify-content-center align-items-center">
            { isLoading ? <Spinner animation="border" className="spinner" /> : pokemons?.map((pokemon,index)=> <PokemonListItem key={index} {...pokemon} />) }
            </Row>
        </Container>
    )
}