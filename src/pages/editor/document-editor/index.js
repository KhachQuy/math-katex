import ReactQuill from "react-quill";
// import {Button} from "react-bootstrap";
// import { Document, Page, Text } from '@react-pdf/renderer'
import {useCallback, useEffect, useState, useRef} from "react";
import {database} from "../../../firebase";
import {Render} from "../rendering";
import './style.css'

export const DocumentEditor = ( {docRef}) => {

  // const [save, setSave] = useState('')
  
  const [text, setText] = useState('');
  let preText = "";
  let posText = text;
  const onTextChanged = useCallback(async (value, delta, source, editor) => {
      // console.log(`==> Text: ${text}`);
      const content = editor.getText();
          if (content.endsWith(' /\n')) {
            alert('about to load function component');
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

  // Autosave function
  async function Saving (docId) {
    preText = text
    const doc = await database.document.doc(docId);
    doc.update({body: text});
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // only save if text change after 3s
      if ( posText != preText) {
        Saving(docRef.id);
      }
      else {
        return
      }
    },3000);
    return () => clearInterval(interval);

  }, );



  return (
  <>
    <div className="text-area">
      <ReactQuill 
      value={text} 
      onChange={onTextChanged} />

    </div>
    <div className='render-area'>
        <Render input = {text} />
      
    </div>
  </>
  )
};
