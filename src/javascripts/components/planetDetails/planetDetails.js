import './planetDetails.scss';
import $ from 'jquery';
import planets from '../../helpers/data/planets';

const hideDetails = () => {
  $('.closeDetails').click(() => {
    $('#planetCards div').toggle('slow', 'linear');
    $('#planetDetails').toggle('slow', 'linear');
  });
};

const printPlanetDetails = (selectedId) => {
  const planetArr = planets.getPlanets();
  let detailString = '';
  for (let x = 0; x < planetArr.length; x += 1) {
    if (selectedId === planetArr[x].name.toLowerCase()) {
      detailString += `
        <button type='button' class='closeDetails' id=${planetArr[x].name.toLowerCase()}>X</button>
        <div class='container text-center'>
          <h2>${planetArr[x].name}</h2>
          <img src='${planetArr[x].imageUrl}' alt='${planetArr[x].name}' />
          <p>Number of Moons: ${planetArr[x].numberOfMoons}</p>
          <p> Largest Moon: ${planetArr[x].nameOfLargestMoon}</p>
          ${planetArr[x].description}
          <p class='credit'>Images and details courtesy of <a href='https://solarsystem.nasa.gov'>NASA</a></p>
        </div>
      `;
    }
  }
  $('#planetDetails').html(detailString);
  hideDetails();
};

const showDetails = (selectedCard) => {
  $(`#${selectedCard}.planetCard`).click(() => {
    $('#planetCards div').toggle('slow', 'linear');
    $('#planetDetails').toggle('slow', 'linear');
    printPlanetDetails(selectedCard);
  });
};

export default { showDetails };
