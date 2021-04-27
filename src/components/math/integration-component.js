import {InlineMath} from "react-katex";

export const IntegrationComponent = ({upperLimit, lowerLimit, equation}) => {
  return (
    <InlineMath math={`\\int_${lowerLimit}^${upperLimit} ${equation}`} />
  );
};
