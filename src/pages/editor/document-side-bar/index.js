import React, {useState} from "react";
import {useAuth} from "../../../context/AuthContext";
import {database} from "../../../firebase";
import {ProSidebar, SidebarHeader} from "react-pro-sidebar";
import {Button, Form, Modal} from "react-bootstrap";
import './style.css';

export const DocumentSideBar = ({onDocumentCreated, documents}) => {
  const [create, setCreate] = useState(false)
  const [name,setName] = useState("");
  const { currentUser } = useAuth();

  const [newlyCreatedProjectId, setNewlyCreatedProjectId] = useState(null);

  function createProject() {
    setCreate(true)
  }
  function cancelProject(){
    setCreate(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    //create a doc in the database
    const docRef = await database.document.add({
      name : name,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
    });

    const docId = docRef.id;
    console.log(`==> DocId: ${docId}`);
    // const createdId = docRef?._delegate?._key?.path?.segments?.[1] || 'Unknown';
    // setName(`${name} - ${createdId}`);
    // console.log(`=> ${name} - ${createdId}`);
    onDocumentCreated({
      id: docId,
      name
    });

    cancelProject()     // why?
  }
  return (
    <>
      <ProSidebar>
        <SidebarHeader>

          <Button onClick = { createProject }>New Document</Button>
          {documents.map((doc) => {
            const { id, name } = doc;
            return <Button key={id}>{name}</Button>
          })}
          <Modal show ={create} onHide = {cancelProject}>
            <Form onSubmit = {handleSubmit}>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Folder Name</Form.Label>
                  <Form.Control
                    type="text"
                    requiredvalue={name}
                    onChange={e =>setName(e.target.value)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick ={cancelProject}>
                  Close
                </Button>
                <Button variant="success" type="submit" disabled = {!name}>
                  Create Project
                </Button>

              </Modal.Footer>
            </Form>
          </Modal>
        </SidebarHeader>
      </ProSidebar>
    </>
  )
};
