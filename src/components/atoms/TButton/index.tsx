import React, {EventHandler, useRef} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { person,addPersonState, personListState } from '../../../recoil/person';
import {useSetRecoilState} from 'recoil';

type shape = 'round' | 'rect' | 'default';
type alphanumeric = string | number;
type Props = {
  caption: string,
  shape: shape,
  color?: string,
  size?: alphanumeric,
  width?: alphanumeric,
  height?: alphanumeric
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const TButton: React.FC<Props> = (props) => {
  const onBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(event);
    }    
  }

  let tempW: alphanumeric = props.size || props.width || 'auto';
  let tempH: alphanumeric = props.size || props.height || 'auto';
  let w = tempW + (isNaN(+tempW) ? '' : 'px');
  let h = tempH + (isNaN(+tempH) ? '' : 'px');
  let color = props.color || '#000';

  const defStyle = css`
    font-weight: bold;
    min-height: 36px;
    background: none;
    padding: 3px 8px;
    color: ${color};
    width: ${w};
    height: ${h};
    cursor: pointer;
  `;
  const roundStyle = css`
    ${defStyle}
    border-radius: 50%;
  `;

  return <>
    <button type="button" css={props.shape === 'round' ? roundStyle : defStyle} onClick={onBtnClick} >
      {props.caption}
    </button>
  </>;
};




export default TButton;
