import './planetCards.scss';
import $ from 'jquery';
import details from '../planetDetails/planetDetails';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

const hoverEvent = (cardId) => {
  $(`#${cardId}.planetCard`).hover(() => {
    $(`#${cardId} .planet-image`).toggle('slow', 'linear');
    $(`#${cardId} .planet-name`).toggle('slow', 'linear');
  });
};

const printPlanetCards = () => {
  const planetArr = planets.getPlanets();
  let cardString = '';
  for (let i = 0; i < planetArr.length; i += 1) {
    cardString += `
      <div id='${planetArr[i].name.toLowerCase()}' class='card planetCard col-lg-3 col-md-4 text-center'>
        <h3 class='planet-name'>${planetArr[i].name}</h3>
        <img class='planet-image' src='${planetArr[i].imageUrl}' alt='${planetArr[i].name}' />
      </div>
    `;
  }
  utilities.printToDom('planetCards', cardString);
  for (let n = 0; n < planetArr.length; n += 1) {
    hoverEvent(`${planetArr[n].name.toLowerCase()}`);
    details.showDetails(`${planetArr[n].name.toLowerCase()}`);
  }
};

export default { printPlanetCards };
