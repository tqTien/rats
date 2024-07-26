import { atom, selector } from 'recoil';

export type modalStt = {
  isShow: boolean
}

const modalStt: modalStt = {
  isShow: false
}

export const modalSttState = atom({
  key: 'modalStt',
  default: modalStt
});