import { atom, selector } from 'recoil';

export type country = {
  code: string,
  name: string
}

const countryList: country[] = [
  {
    code: 'VN',
    name: 'Vietnam'
  },
  {
    code: 'JP',
    name: 'Japan'
  },
  {
    code: 'US',
    name: 'United State of America'
  }
];

export const countryListState = atom({
  key: 'countryList',
  default: countryList
});

