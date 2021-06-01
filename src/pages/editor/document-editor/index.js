import ReactQuill from "react-quill";
import {Button} from "react-bootstrap";
import {useCallback, useEffect, useState} from "react";
import {database} from "../../../firebase";
// import {InlineMath} from "react-katex";
import {Render} from "../rendering";
import './style.css'

export const DocumentEditor = ( {docRef}) => {

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
      const promise = doc.get();
      promise.then((result) => {
        const data = result.data();
        const { body } = data;
        setText(body);
      });

      
    }, [docRef]);
    // Autosave function
    async function Saving () {
      preText = text
      const docId = docRef.id;
      const doc = await database.document.doc(docId);
      doc.update({body: text});
      console.log("Saved")
      
    };
    
    useEffect(() => {
      const interval = setInterval(() => {
        if ( posText != preText )  {
          Saving();
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
        <ReactQuill value={text} onChange={onTextChanged} />

      </div>
      <div className='render-area'>
        <Render input = {text} />
      </div>
    </>
    )
};
