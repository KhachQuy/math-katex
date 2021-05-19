import React, {useState} from "react";
import {useAuth} from "../../../context/AuthContext";
import {database} from "../../../firebase";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Form, Modal} from "react-bootstrap";
import {Editor} from '../';
import './style.css';
import 'react-pro-sidebar/dist/css/styles.css';

export const DocumentSideBar = ({onDocumentCreated, documents}) => {
  const [create, setCreate] = useState(false)
  const [name,setName] = useState("");
  const { currentUser } = useAuth();
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [newlyCreatedProjectId, setNewlyCreatedProjectId] = useState(null);
  function createDoc() {
    setCreate(true)
  }
  function cancelDoc(){
    setCreate(false)
  }

  //delete a document 
  async function deleteDocument(currentDoc) {
    const docRef = database.document.doc(currentDoc.id);
    const doc = await docRef.get();

    if(window.confirm(`Are you sure you want to delete: ${currentDoc.name}`)){
      if (doc.exists){
        database.document.doc(currentDoc.id).delete().then(() => {
          console.log({currentDoc},"Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
      else {
        alert('Document does not exist');
      }
    }
  }

  // get current doc corresponding with doc ID
  const handleListItemClick = (event, Doc) => {
    // Editor(Doc)
    setSelectedIndex(Doc.id);
    console.log(Doc.id)
    
  };
  // Create a document on database
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
      name,
      currentUser
    });

    cancelDoc()     // why?
  }
  return (
    <>
      <div className = "Sidebar"> 
        <div className = "sidebar-header">
          <Button bsPrefix="sidebar-btn" onClick = { createDoc }>New Document</Button>
        </div>

          {documents.map((doc) => {
            const { id, name } = doc;

            return (
              // list of created documents on sidebar
              <List className="doc-list">
                <ListItem className ="item"
                    key={id} 
                    button
                    selected = {selectedIndex === id}
                    onClick={(event) => handleListItemClick(event,doc)}
                    alignItems = 'flex-start'
                    >
                    
                  <ListItemText primary={name} />
                  <DeleteIcon onClick = {() => deleteDocument(doc) } ></DeleteIcon>

                </ListItem>
                <Divider></Divider>

              </List>

            )

          })}

          {/* Create document form */}
          <Modal show ={create} onHide = {cancelDoc}>
            <Form onSubmit = {handleSubmit}>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>Document Name</Form.Label>
                  <Form.Control
                    type="text"
                    requiredvalue={name}
                    onChange={e =>setName(e.target.value)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick ={cancelDoc}>
                  Close
                </Button>
                <Button variant="success" type="submit" disabled = {!name}>
                  Create Project
                </Button>

              </Modal.Footer>
            </Form>
          </Modal> 
      </div>
    </>
  )
        };
