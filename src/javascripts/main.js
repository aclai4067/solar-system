import 'bootstrap';
import '../styles/main.scss';
import cards from './components/planetCards/planetCards';
import search from './components/searchPlanets/searchPlanets';

const init = () => {
  cards.printPlanetCards();
  search.printSearchForm();
};

init();
