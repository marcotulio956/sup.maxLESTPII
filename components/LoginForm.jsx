import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';










const LoginForm = ( usertype ) => {
   return( 
   
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Senha
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Senha" />
        </Col>
   
      </Form.Group>
 

      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Form>
   )
}

export default LoginForm