import './planetCards.scss';
import $ from 'jquery';
import details from '../planetDetails/planetDetails';
import utilities from '../../helpers/utilities';

const hoverEvent = (cardId) => {
  $(`#${cardId}.planetCard`).hover(() => {
    $(`#${cardId} .planet-image`).toggle('slow', 'linear');
    $(`#${cardId} .planet-name`).toggle('slow', 'linear');
  });
};

const printPlanetCards = (p) => {
  let cardString = '';
  for (let i = 0; i < p.length; i += 1) {
    cardString += `
      <div id='${p[i].name.toLowerCase()}' class='card planetCard col-lg-3 col-md-4 text-center'>
        <h3 class='planet-name'>${p[i].name}</h3>
        <img class='planet-image' src='${p[i].imageUrl}' alt='${p[i].name}' />
      </div>
    `;
  }
  utilities.printToDom('planetCards', cardString);
  for (let n = 0; n < p.length; n += 1) {
    hoverEvent(`${p[n].name.toLowerCase()}`);
    details.showDetails(`${p[n].name.toLowerCase()}`);
  }
};

export default { printPlanetCards };
