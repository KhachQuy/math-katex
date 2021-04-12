import {InlineMath} from "react-katex";
import './square-component.css';

export const SquareComponent = ({value, onClicked}) => {
  return (
    <div onClick={onClicked} className={'math-symbol square-symbol'}>
      <InlineMath math={`2^${value}`} />
    </div>
  );
};
