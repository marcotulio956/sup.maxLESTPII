
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Layout from '../components/Layout'
import styles from "../styles/Userlogin.module.css";
import Link from "next/link";
import Image from 'next/image'

export default function Userhome() {      
    return (
        <Layout>
            <div className={styles.title}>
              Log In
            </div>
            <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
              <Tab eventKey="Secretaria" title="Secretaria">
                  <div className={styles.link}>
                  <Link href="/secretaria">
                    /secretaria
                  </Link>
                  </div>
              </Tab>
              <Tab eventKey="Professor" title="Professor">
                  tba
              </Tab>
              <Tab eventKey="Medico" title="Médico">
                  kkk
              </Tab>
              <Tab eventKey="Aluno" title="Aluno">
                  sda
              </Tab>
            </Tabs>
        
        </Layout>
        
        
    )
}

