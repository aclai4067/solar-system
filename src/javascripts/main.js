import 'bootstrap';
import '../styles/main.scss';
import utilities from './helpers/utilities';

const init = () => {
  utilities.printToDom('planetCards', 'test');
};

init();
