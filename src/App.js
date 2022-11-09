import './App.css';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import React, { useState } from 'react';


function App() {

  const dataWords = [
    {id: 1, name: "behind", description: "detrás"},
    {id: 2, name: "beside", description: "junto a"},
    {id: 3, name: "above", description: "arriba"},
    {id: 4, name: "below", description: "abajo"},
  ]

  const [data, setdata] = useState(dataWords);

  return(
    <Container>
      <br />
      <Button>Insert word</Button>
      <br />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Word</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td><Button>Edit</Button> <Button>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

  )
}

export default App;
