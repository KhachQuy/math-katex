import Navbar from "./Navbar";
import {DocumentSideBar} from "./document-side-bar";
import {useCallback, useEffect, useState} from "react";
import './style.css';
import {DocumentEditor} from "./document-editor";
import {database} from "../../firebase";
import { useAuth } from "../../context/AuthContext"
/***
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Editor = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [activeDocumentRef, setActiveDocumentRef] = useState(undefined);
  const docList = [];
  const {currentUser} = useAuth();
  useEffect(() => {
    async function showDoc() {
      const docu = await database.document.get();
      const docs = docu.docs;

      docs.forEach((doc) => {

        const data = doc.data();
        const user = data.userId;
        const name = data.name;
        const id = doc.id;
        const document = {id, name};
        
        if (user === currentUser.uid) { 
          docList.push(document)
        };
        
      })
      return docList

    }
    showDoc().then(r => {
      setDocuments(r);
      setActiveDocumentRef((r[0]));

    })

  },[])


  const onDocumentCreatedCallback = useCallback(({ id, name }) => {
    setDocuments((prev) => {
      const cloned = [...prev];
      cloned.push({id, name});
      return cloned;
    });
    const ref = { id, name };
    setActiveDocumentRef(ref);
    setShowEditor(true);
  }, []);

  const onDocumentSelectedCallback = useCallback(({id,name}) => {
    setActiveDocumentRef({id,name})
    setShowEditor(true)
  }, []);

  const onDocumentDeletedCallback = useCallback(({id}) => {
    setDocuments((prev) => {
      const cloned = [...prev];
      const foundIndex = cloned.findIndex((element) => {
        return element.id === id;
      });
      if (foundIndex !== -1) {
        cloned.splice(foundIndex,1)
      }
      return cloned;
    });
  },[]);


  return (
    <div className={'my-editor'}>
      <Navbar/>
      <div className={'page-content'}>
        <DocumentSideBar

            documents={documents}
            onDocumentCreated={onDocumentCreatedCallback}
            onDocumentSelected={onDocumentSelectedCallback}
            onDocumentDeleted={onDocumentDeletedCallback}
            />
        {showEditor && <DocumentEditor docRef={activeDocumentRef} />}
        {/*<div className= 'editor-area'>*/}
        {/*  */}
        {/*</div>*/}
      </div>
      <div className='status-bar'/>
    </div>
  );
};

