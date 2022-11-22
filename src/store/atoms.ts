import { atom, atomFamily } from 'recoil';

import { Element } from '_/types/element';

export const selectedElementAtom = atom<number | null>({
  key: 'selectedElements',
  default: null,
});

export const elementsAtom = atom<number[]>({
  key: 'elements',
  default: [],
});

export const elementFamily = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: { x: 0, y: 0 },
      size: { width: 50, height: 50 },
    },
  },
});
