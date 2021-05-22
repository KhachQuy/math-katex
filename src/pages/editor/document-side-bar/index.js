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

export const DocumentSideBar = ({onDocumentCreated, onDocumentSelected, onDocumentDeleted, documents}) => {
  const [create, setCreate] = useState(false)
  const [name,setName] = useState('');
  const { currentUser } = useAuth();
  const [text,setText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(1)

  function createDoc() {
    setCreate(true)
  }
  function cancelDoc(){
    setCreate(false)
  }

  //delete a document 
  async function deleteDocument(currentDoc) {
    const {id, name } = currentDoc
    const docRef = database.document.doc(id);
    const doc = await docRef.get();
    if(window.confirm(`Are you sure you want to delete: ${name}`)){
      if (doc.exists){
        onDocumentDeleted({id,name})
        database.document.doc(id).delete().then(() => {
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
  async function handleListItemClick(event, Doc){
    // Editor(Doc)
    const {id, name } = Doc
    setSelectedIndex(Doc.id);

    onDocumentSelected({
      id: id,
      name: name,
    })

  };

  // Create a document on database
  async function handleSubmit(e) {
    e.preventDefault()
    //create a doc in the database
    const docRef = await database.document.add({
      name : name,
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      body: text
    });

    const docId = docRef.id;
    const docText = docRef.body
    onDocumentCreated({
      id: docId,
      name,
      docText


      // currentUser,
    });

    cancelDoc()     // why?
  }
  return (
    <>
      <div className = "Sidebar"> 
        <div className = "sidebar-header">
          <Button bsPrefix="sidebar-btn" onClick = { createDoc }>New Document</Button>
        </div>
          {/*<span style = {{color: 'white'}}> Total of documents: {documents.length}</span>*/}
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
