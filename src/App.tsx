import React, {useEffect,useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from "@emotion/react";
import {AddAccount} from './pages/account/add';
import {AccountList} from './pages/account/list';
import {useRecoilValue} from 'recoil';
import { pageState, PAGE_ACC_LST } from 'src/recoil/page';

function App() {
  // const personList = useRecoilValue(personListState);
  // const newPersonList = useRecoilValue(newPersonListState);
  // const [isShowConf,setShowConf] = useState(false);
  function doSth() {
    // isShowConf.current = true;
    //setShowConf(true);
    //setModalStt({isShow: true});
    // useModal('a','b');
    console.log('doSth');
  }
  // const personListUI = personList.map((person) => 
  //   <div key={person.id}>{person.name}</div>
  // );
  // const newPersonListUI = newPersonList.map((person) => 
  //   <div key={person.id}>{person.name}</div>
  // );

  let pageId = useRecoilValue(pageState);
  return (
    <div className="App">
      {pageId === PAGE_ACC_LST ? <AccountList /> : <AddAccount />}
    </div>
  );
}

export default App;
