import React, {useEffect,useState} from 'react';
import TButton from 'src/components/atoms/TButton';
import { css, Global } from "@emotion/react";
import { useSetRecoilState } from 'recoil';
import { pageState, PAGE_ACC_ADD, tyPageId } from 'src/recoil/page';

export function AccountList() {
  let setPageId = useSetRecoilState(pageState);
  const goAddAccount = () => {
    const pageId: tyPageId = PAGE_ACC_ADD;
    setPageId(pageId);
  };

  return (
    <>
      <Global styles={css`body {background: #d9f8f3;padding: 20px;}`} />
      <div>
        <TButton caption="Add account" shape="round" size="80" onClick={goAddAccount} />
      </div>
    </>
  );
}