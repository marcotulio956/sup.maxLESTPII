
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Layout from '../components/Layout';
import styles from "../styles/Userlogin.module.css";
import Link from "next/link";
import Image from "next/image";
import LoginForm from '../components/LoginForm.jsx'

export default function Userhome() {      
    return (
        <Layout>
            <div className={styles.title}>
              Entrar
            </div>
            <Tabs defaultActiveKey="Aluno" id="fill-tab-example" className="mb-3" fill>
              <Tab eventKey="Secretaria" title="Secretaria">
                <LoginForm usertype="secretaria"/>
              </Tab>
              <Tab eventKey="Professor" title="Professor">
                <LoginForm usertype="professor"/>
              </Tab>
              <Tab eventKey="Medico" title="Médico">
                <LoginForm usertype="medico"/>
              </Tab>
              <Tab eventKey="Aluno" title="Aluno">
                <LoginForm usertype="aluno"/>
              </Tab>
            </Tabs>
        </Layout>
    )
}

Userhome.getInitialProps = async () => {
    const response = await axios.get(
        "http://localhost:3000/api/users"
    )

    return { users: response.data }
}
