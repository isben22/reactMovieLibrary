import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import crystal from '../../src/img/crystal-ball.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Search from './search.js';


class Jumbo extends React.Component {
    render() {

        return (
            <div>
                <Jumbotron fluid style={{ backgroundImage: `url(${crystal})`, backgroundPositionY: '-20em', backgroundRepeat: 'no-repeat', backgroundSize: '100%', height:"500px" }}>
                    <Container fluid>
                        <h1 style={{fontFamily: 'Meddon' , color:"white"}}>Music Reaction</h1>
                        <p style={{color:"white"}}>
                            This is a React powered Music Library
                        </p>
                        <Search />

                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
export default Jumbo;