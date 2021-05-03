import ReactQuill from "react-quill";
import {Button} from "react-bootstrap";
import {useCallback, useState} from "react";
import {database} from "../../../firebase";
import {InlineMath} from "react-katex";

export const DocumentEditor = ({docRef, onSave}) => {
  const [text, setText] = useState(undefined);

  const onTextChanged = useCallback((value, delta, source, editor) => {
    // console.log(`==> Text: ${text}`);
    const content = editor.getText();
    if (content.endsWith(' /\n')) {
      alert('about to load function component');
    }
    setText(value);
  }, []);

  const onSaveCallback = useCallback(async () => {
    const docId = docRef.id;
    const doc = await database.document.doc(docId);
    await doc.set({data: text});

    onSave();
  }, [onSave, docRef, text]);

  return (
    <div className={'document-editor'}>
      {docRef && `${docRef.name} - ${docRef.id}` }
      <ReactQuill value={text} onChange={onTextChanged} />
      <Button onClick={onSaveCallback}>Save</Button>
      <InlineMath math={`2^${3}`} />
    </div>
  )
};