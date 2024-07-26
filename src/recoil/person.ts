import { atom, selector } from 'recoil';

export type person = {
  id: number,
  name: string,
  dob: string,
  stt: string
};
const def:person[] = [
  {
    id: 1,
    name: "A",
    dob: "1990/01/01",
    stt: ""
  },
  {
    id: 2,
    name: "B",
    dob: "1992/02/28",
    stt: ""
  }
];

export const personListState = atom({
  key: "personList",
  default: def
});

export const newPersonListState = selector({
  key: "newPersonList",
  get: ({get}) => {
    const list = get(personListState);
    return list.filter((person) => person.stt === "new");
  }
});

export const addPersonState = selector({
  key: "addPerson",
  get: ({ get }) => { return {}; },
  set: ({get,set}, newVal) => {
    const list = get(personListState);
    console.log(newVal);
    set(personListState, [...list,newVal as unknown as person]);
    // set(personListState, [...list, {
    //   id: 4,
    //   name: "D",
    //   dob: "1990/01/01",
    //   stt: "new"
    // }]);
  }
});