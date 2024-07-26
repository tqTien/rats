import { atom, selector } from 'recoil';
import { country } from 'country';
export type reg = {
  fname: string,
  gname: string,
  country: keyof country
}

const def:reg = {
  fname: '',
  gname: '',
  country: ''
}

export const regState = atom({
  key: 'reg',
  default: def
});