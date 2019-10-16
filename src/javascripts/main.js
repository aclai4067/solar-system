import 'bootstrap';
import '../styles/main.scss';
import cards from './components/planetCards/planetCards';
import planets from './helpers/data/planets';
import search from './components/searchPlanets/searchPlanets';

const init = () => {
  const planetArr = planets.getPlanets();
  cards.printPlanetCards(planetArr);
  search.printSearchForm();
};

init();
