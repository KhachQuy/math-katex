import {useCallback} from 'react';
import './style.css';
import ReactQuill from "react-quill";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const Rendering = ({input}) => {
    var Latex = require('react-latex');

    // const transform = useCallback (() => {

    // })
    function removeHTML(html) {
        const text = html.replace (/<br ?\/?>/g, "\n")
        return text.replace (/(<([^>]+)>)/ig, '')
      
      }
      
      return (
        <div className='rendering'>
          {/* <InlineMath */}
          <Latex>
            {removeHTML(input)}
          </Latex>
          {/* </InlineMath>   */}
        

        
        </div>
      )

}
