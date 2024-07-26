import { atom } from 'recoil';

export const PAGE_ACC_LST = 'acc_lst';
export const PAGE_ACC_ADD = 'acc_add';

export type tyPageId = | typeof PAGE_ACC_ADD | typeof PAGE_ACC_LST;

let pageId: tyPageId = PAGE_ACC_LST;
export const pageState = atom<tyPageId>({
  key: 'page',
  default: pageId
});