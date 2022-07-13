
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Layout from '../components/Layout'
import styles from "../styles/Userhome.module.css";
import Link from "next/link";
import Image from 'next/image'

export default function Tabs() {      
    return (
        <Layout>
            <div className={styles.title}>
              Acesso secretaria
            </div>
            <div className={styles.container}>
          <Tab.Container id="list-group-tabs-example" >
        <Col sm={2}>
          <ListGroup>
            <ListGroup.Item action color='orange' href="#cadastro" >
              Cadastro
            </ListGroup.Item>
            <ListGroup.Item action href="#matricula">
              Matricula
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col  align='center'>
          <Tab.Content>
            <Tab.Pane eventKey="#cadastro">
              abc
            </Tab.Pane>
            <Tab.Pane eventKey="#matricula">
              cde
            </Tab.Pane>
          </Tab.Content>
        </Col>
    </Tab.Container>
            </div> 
        </Layout>
        
        
    )
}

