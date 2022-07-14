import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Main() {
    return (
        <Layout> 
            <div className={styles.container} >    
           <Container>   
            <Row >
                <Col >
                    <div className={styles.link}>  
                        <Link href='/'> 
                            <Image src="/img/modalidades/natacao.jpg" fluid  />
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className={styles.link}>  
                        <Link href='/'> 
                            <Image src="/img/modalidades/musculacao.jpg" fluid  /> 
                        </Link>
                    </div>
                </Col>
                </Row>
                <row> &nbsp;</row> 
                <Row>
                <Col>
                    <div className={styles.link}>  
                        <Link href='/'> 
                            <Image src="/img/modalidades/crossfit.jpg" fluid />
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className={styles.link}>
                        <Link href='/'>
                            <Image src="/img/modalidades/spinning.jpg"  fluid />
                        </Link>
                    </div>
                </Col>
                <Col>                        
                    <div className={styles.link}>  
                        <Link href='/'>
                            <Image src="/img/modalidades/ritmos.jpg" fluid  />
                        </Link>
                    </div>
                </Col>
                 
            </Row>
            </Container>
            </div> 
        </Layout>
    )
}