import './planetCards.scss';
import $ from 'jquery';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

const planetArr = planets.getPlanets();

const hoverEvent = (cardId) => {
  $(`#${cardId}.planetCard`).hover(() => {
    $(`#${cardId} .planet-image`).toggle('slow', 'linear');
    $(`#${cardId} .planet-name`).toggle('slow', 'linear');
  });
};

const printPlanetDetails = (selectedId) => {
  let detailString = '';
  for (let x = 0; x < planetArr.length; x += 1) {
    if (selectedId === planetArr[x].name.toLowerCase()) {
      detailString += `
        <div class='container text-center'>
          <button type='button' id=${planetArr[x].name.toLowerCase()}>X</button>
          <h2>${planetArr[x].name}</h2>
          <img src='${planetArr[x].imageUrl}' alt='${planetArr[x].name}' />
          <p>Number of Moons: ${planetArr[x].numberOfMoons}</p>
          <p> Largest Moon: ${planetArr[x].nameOfLargestMoon}</p>
          ${planetArr[x].description}
        </div>
      `;
    }
  }
  console.log(selectedId);
  $('#planetDetails').html(detailString);
};

const showDetails = (selectedCard) => {
  $(`#${selectedCard}.planetCard`).click(() => {
    $('#planetCards div').toggle();
    $('#planetDetails').toggle();
    printPlanetDetails(selectedCard);
  });
};

const printPlanetCards = () => {
  let cardString = '';
  for (let i = 0; i < planetArr.length; i += 1) {
    cardString += `
      <div id='${planetArr[i].name.toLowerCase()}' class='card planetCard col-sm-3 text-center'>
        <h3 class='planet-name'>${planetArr[i].name}</h3>
        <img class='planet-image' src='${planetArr[i].imageUrl}' alt='${planetArr[i].name}' />
      </div>
    `;
  }
  utilities.printToDom('planetCards', cardString);
  for (let n = 0; n < planetArr.length; n += 1) {
    hoverEvent(`${planetArr[n].name.toLowerCase()}`);
    showDetails(`${planetArr[n].name.toLowerCase()}`);
  }
};

export default { printPlanetCards };
