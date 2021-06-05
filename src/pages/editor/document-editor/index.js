import ReactQuill from "react-quill";
// import {Button} from "react-bootstrap";
// import { Document, Page, Text } from '@react-pdf/renderer'
import {useCallback, useEffect, useState, useRef} from "react";
import {database} from "../../../firebase";
import {Rendering} from "../rendering";
import './style.css'

export const DocumentEditor = ( {docRef}) => {

  // const [save, setSave] = useState('')
  
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');
  const [autoSaveInMillisecond] = useState(3000);

  const onTextChanged = useCallback(async (value, delta, source, editor) => {
      const content = editor.getText();
          if (content.endsWith(' /\n')) {
            ;
          }
      setText(value);
  }, []);

  // read document body
  useEffect(() => {
    if (docRef === null || docRef === undefined ) {
      return;
    }


    const doc = database.document.doc(docRef.id);
    console.log("currDoc", docRef.id, docRef.name)
    const promise = doc.get();
    promise.then((result) => {
      const data = result.data();
      const { body } = data;
      setText(body);
    });

    
  }, [docRef]);


  function savingDoc(docId, textToSave, shouldSave) {
    if (!shouldSave) {
      return Promise.resolve();
    }

    const doc = database.document.doc(docId);
    return doc.update({body: textToSave});
  }


  useEffect(() => {
    const savingIntervalId = setInterval(() => {
      savingDoc(docRef.id, text, text !== savedText).then(() => {
        setSavedText(text);
      });
    }, autoSaveInMillisecond);

    return () => {
      clearInterval(savingIntervalId);
    };

  },[text, savedText, autoSaveInMillisecond, docRef]);

  return (
  <div className='document-editor'>
    <div className="text-area">
      <ReactQuill 
      value={text} 
      onChange={onTextChanged} />

    </div>
    <div className='render-area'>
      <div className = "screen">
        <div className = 'render-header'>
          {docRef.name}
        </div>
        <Rendering input = {text} />
      </div>
    </div>
  </div>
  )
};
