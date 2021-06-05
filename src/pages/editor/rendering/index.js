import {useCallback} from 'react';
import './style.css';
import ReactQuill from "react-quill";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const Render = ({input}) => {
    var Latex = require('react-latex');

    // const transform = useCallback (() => {

    // })
    function removeHTML(html) {
        const text = html.replace (/<br ?\/?>/g, "\n")
        return text.replace (/(<([^>]+)>)/ig, '')
      
      }
      
      return (
        <>
          {/* <InlineMath */}
          <Latex>
            {removeHTML(input)}
          </Latex>
          {/* </InlineMath>   */}
        

        
        </>
      )

}
