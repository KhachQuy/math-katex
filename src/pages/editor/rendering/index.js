import {useCallback} from 'react';


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
          <Latex>{removeHTML(input)}</Latex>
        </>
      )

}
