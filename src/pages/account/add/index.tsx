import { regState } from 'src/recoil/reg';
import React, {useEffect,useState} from 'react';
// import TextField from './components/atoms/TextField';
// import TButton from '@com/atoms/TButton';
import TButton from 'src/components/atoms/TButton';
// import CountryList from './components/atoms/CountryList';
import { modalSttState } from 'src/recoil/modalStt';
// import {useModal} from './functional/hooks/useModal';
// import {ConfModal} from './components/organisms/modal/conf';
import { pageState, PAGE_ACC_LST, tyPageId } from 'src/recoil/page';
import { useSetRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function AddAccount() {
  let setPageId = useSetRecoilState(pageState);
  function doSave() {

  }
  function doBack() {
    const pageId: tyPageId = PAGE_ACC_LST;
    setPageId(pageId);
  }
  const cmdStyle = css`
  display: flex;
`;
  return (
    <div className="frm">
      {/* <ConfModal title="Test dialog" msg="Do you really want to save?" />
      <div className={`md-conf ${isShowConf && 'md--show'}`}>
        <div className="md-content">
        <div className="md-text">Do you really want to save?</div>
        <div className="md-cmd"><button className="md-cmd-btn">Yes</button><button className="md-cmd-btn">No</button></div>
        </div>
      </div>
      ▼ Default<br />
      {personListUI}
      <br /><br />▼ New person<br />
      {newPersonListUI}
      <TextField label="Family Name" model="fname" />
      <TextField label="Given Name" model="gname" />
      <CountryList /> */}
      
      <div css={cmdStyle}>
        <div css={cmdBackStyle}>
          <a href="#" onClick={doBack}>Back - test</a>
        </div>
        <div css={cmdMainStyle}>
          <TButton caption="Save" onclick={doSave} />
        </div>
      </div>
    </div>
  );
}



const cmdBackStyle = css`
  flex: 0 0 80px;
`;

const cmdMainStyle = css`
  width: 100%;
  text-align: center;
`;