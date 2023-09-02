import { atom } from "recoil";

export const imageState = atom<any[]>({
  key: "imageState",
  default: [],
});

export const imageArr = atom<any[]>({
  key: "imageArr",
  default: [],
});
