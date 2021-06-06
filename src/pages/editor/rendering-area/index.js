import React, {useEffect, useState} from 'react';
import './style.css';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import {processInput} from "../utils/input-processing";

export const RenderingArea = ({title, input}) => {
  const [renderingInput, setRenderingInput] = useState('');

  function removeHTML(html) {
    if (!html) {
      return '';
    }

    // const text = html.replace(/<\/p>/g, "$ \\newline $");
    let text = html.replace(/$/g, "$$");
    text = text.replace(/\n/g, "$ \\newline $");
    console.log(`==> text: ${JSON.stringify(text)}`);
    // return text.replace(/(<([^>]+)>)/ig, '');
    return text;
  }


  useEffect(() => {
    const transformedInput = processInput(input);
    setRenderingInput(transformedInput);
  }, [input]);

  useEffect(() => {
    console.log(`==> ${JSON.stringify(input)}`);
  }, [input]);

  return (
    <div className='rendering-area'>
      <div className='render-header'>
        {title}
      </div>
      <div className='render-latex'>
        <Latex>
          {renderingInput}
        </Latex>
      </div>
    </div>

  )

}
