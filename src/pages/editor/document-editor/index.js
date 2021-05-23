import ReactQuill from "react-quill";
import {Button} from "react-bootstrap";
import {useCallback, useEffect, useState} from "react";
import {database} from "../../../firebase";
import {InlineMath} from "react-katex";
import './style.css'

export const DocumentEditor = ( {docRef, onSave}) => {

    const [text, setText] = useState('');

    const onTextChanged = useCallback(async (value, delta, source, editor) => {
        // console.log(`==> Text: ${text}`);
        const content = editor.getText();
            if (content.endsWith(' /\n')) {
              alert('about to load function component');
            }

        setText(value);
    }, []);

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

    const onSaveCallback = useCallback(async () => {
        const docId = docRef.id;
        const doc = await database.document.doc(docId);
        const t = await doc.update({body: text});
        // await doc.set({name: "1234"})
        onSave();
    }, [docRef, onSave, text]);
    console.log("onsave",text)

    return (
    <>
      <div className="text-area">
        {docRef && `${docRef.name}` }
        <ReactQuill value={text} onChange={onTextChanged} />

        <Button onClick={onSaveCallback}>Save</Button>
      </div>
      <div className='render-area'>
      <div dangerouslySetInnerHTML={{__html: text}}></div>
          <InlineMath math={text} />
      </div>
    </>
    )
};
