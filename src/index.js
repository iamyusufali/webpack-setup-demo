import { ELEMENT } from './app/utils/elements';
import { INCREMENTER, DECREMENTER } from './app/app';

import './main.scss';

const addEventListners = () => {
  ELEMENT.increment.addEventListener('click', INCREMENTER);
  ELEMENT.decrement.addEventListener('click', DECREMENTER);
};

addEventListners();