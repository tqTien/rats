import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { countryListState } from '../../../recoil/country';
import { regState } from '../../../recoil/reg';
import {useRecoilValue, useRecoilState} from 'recoil';

type Props = {
  selectText?: string
};
export default function CountryList() {
  useEffect(() => {
    console.log('CountryList2');
    return () => {
      console.log('CountryList unmountttt');
    }
  }, []);
  
  const [reg, setReg] = useRecoilState(regState);
  function handleChange(ev:React.ChangeEvent<HTMLSelectElement>) {
    console.log(ev.target.value);
    setReg({...reg, country: ev.target.value});
  }

  const countryList = useRecoilValue(countryListState);
  const countryListUI = countryList.map((country) => <option value={country.code} key={country.code}>{country.name}</option>);
  return (
    <div>
    <p className="frm-lbl">Country</p>
    
    <select onChange={handleChange}>
      {countryListUI}
    </select>
    </div>
  );
}