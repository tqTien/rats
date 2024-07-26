import React, {useRef,useEffect} from 'react';
import { regState } from '../../../recoil/reg';
import { useRecoilState } from 'recoil';
type Props = {
  label: string,
  model: string
};

function TextField(props: Props) {
  
  const [reg, setReg] = useRecoilState(regState);
  let keyupTimeout = useRef<ReturnType<typeof setTimeout>>();
  function done() {
    console.log('done');
  }
  function handleChange(ev: React.KeyboardEvent<HTMLInputElement>) {
    clearTimeout(keyupTimeout.current);
    keyupTimeout.current = setTimeout(function() {
      setReg({...reg, [props.model]: (ev.target as HTMLInputElement).value});
    }, 500);
  }

  return <div>
    <label>
      <p className="frm-lbl">{props.label}</p>
      <input type="text" onKeyUp={handleChange} />
    </label>
  </div>;
};

export default TextField;
