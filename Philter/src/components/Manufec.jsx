import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import analytics from './images/analysis.jpg';
import product from './images/product.png';
import dist from './images/dist.jpg';
import './Manufec.css';
import {Link} from 'react-router-dom';


function Manufec() {
  return (

    <div >
        <Container  >
            <Row >
                <h2 className='text-center' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Manufacturer Panel</h2>
            </Row>
        </Container>

        <Container>
            <Row xs={1} md={2} lg={3} className="justify-content-center">
                
                <Link style={{textDecoration: 'none', color: '#282828'}}  to='analytics'>
                    <Card className='mx-4' style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={analytics} />
                        <Card.Body>
                            <Card.Title>Analytics</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>            
                
                <Link style={{textDecoration: 'none', color: '#282828'}}  to='product'>
                    <Card className='mx-4' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product} />
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>

                <Link style={{textDecoration: 'none', color: '#282828'}} to='distributor'>
                    <Card className='mx-4' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dist} />
                        <Card.Body>
                            <Card.Title>Distributor</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Row>
        </Container>

    </div>    
  )
}

export default Manufec;