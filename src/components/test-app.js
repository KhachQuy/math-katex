import {useCallback, useState} from "react";
import {SquareComponent} from "./square-component";
import {IntegrationComponent} from "./integration-component";

export const TestApp = () => {
  const [value, setValue] = useState(undefined);
  const [showSymbol, setShowSymbol] = useState(false);

  const onKeyPressCallback = useCallback((event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      setShowSymbol(true);
    }
  }, []);

  const onChangeCallback = useCallback((event) => {
    const value = event.target.value;
    setValue(value);
  }, []);

  return (
    <div className="App">
      {!showSymbol &&
      <input value={value} onChange={onChangeCallback} onKeyPress={onKeyPressCallback}/>
      }
      {showSymbol && <SquareComponent value={value}
                                      onClicked={() => setShowSymbol(false)}
      />}
    </div>
  );
};
