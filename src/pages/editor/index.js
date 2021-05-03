import Navbar from "./Navbar";
import {DocumentSideBar} from "./document-side-bar";
import {useCallback, useState} from "react";
import './style.css';
import {DocumentEditor} from "./document-editor";

export const Editor = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [activeDocumentRef, setActiveDocumentRef] = useState(undefined);

  const onDocumentCreatedCallback = useCallback(({ id, name }) => {
    setDocuments((prev) => {
      const cloned = [...prev];
      cloned.push({id, name});
      return cloned;
    });
    setActiveDocumentRef({id, name});
    setShowEditor(true);
  }, []);

  return (
    <div className={'my-editor'}>
      <Navbar/>
      <div className={'page-content'}>
        <DocumentSideBar onDocumentCreated={onDocumentCreatedCallback} documents={documents} />
        {showEditor && <DocumentEditor docRef={activeDocumentRef} onSave={() => {}} />}
      </div>
    </div>
  );
};

