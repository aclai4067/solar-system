import './planetCards.scss';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';

const printPlanetCards = () => {
  let cardString = '';
  const planetArr = planets.getPlanets();
  for (let i = 0; i < planetArr.length; i += 1) {
    cardString += `
      <div id='${planetArr[i].name.toLowerCase()}' class='card planetCard col-sm-3 text-center'>
        <h3>${planetArr[i].name}</h3>
      </div>
    `;
  }
  utilities.printToDom('planetCards', cardString);
};

export default { printPlanetCards };
