import { ELEMENT } from './utils/elements';

export const INCREMENTER = () => {
  let value = Number(ELEMENT.result.innerText);
  ELEMENT.result.innerText = value + 1;
};

export const DECREMENTER = () => {
  let value = Number(ELEMENT.result.innerText);
  ELEMENT.result.innerText = value - 1;
};
