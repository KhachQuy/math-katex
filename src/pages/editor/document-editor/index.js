import ReactQuill from "react-quill";
// import {Button} from "react-bootstrap";
// import { Document, Page, Text } from '@react-pdf/renderer'
import {useCallback, useEffect, useState, useRef} from "react";
import {database} from "../../../firebase";
import {RenderingArea} from "../rendering-area";
import './style.css'

export const DocumentEditor = ( {docRef}) => {

  // const [save, setSave] = useState('')
  
  const [inputText, setInputText] = useState('');
  const [renderingText, setRenderingText] = useState(inputText);
  const [savedText, setSavedText] = useState('');
  const [autoSaveInMillisecond] = useState(3000);

  const onTextChanged = useCallback(async (value, delta, source, editor) => {
      // const content = editor.getText();
      //     if (content.endsWith(' /\n')) {
      //       return;
      //     }

      const deltaContents = editor.getContents();
      const val = deltaContents.ops[0].insert;
      setInputText(value);
      setRenderingText(val);
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
      setInputText(body);
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
      savingDoc(docRef.id, inputText, inputText !== savedText).then(() => {
        setSavedText(inputText);
      });
    }, autoSaveInMillisecond);

    return () => {
      clearInterval(savingIntervalId);
    };

  },[inputText, savedText, autoSaveInMillisecond, docRef]);

  return (
  <div className='document-editor'>
    <div className="text-area">
      <ReactQuill 
      value={inputText}
      onChange={onTextChanged} />
    </div>

    <RenderingArea input={renderingText} title={docRef.name} />
  </div>
  )
};
