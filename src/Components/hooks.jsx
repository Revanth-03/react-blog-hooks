import { useState } from "react";

export default function useFormInfo(initial) {
  const [value, setValue] = useState(initial);

  function handleValue(e) {
    setValue(e.target.value);
  }
  function reset() {
    setValue("");
  }
  return { value, onChange: handleValue, reset };
}
