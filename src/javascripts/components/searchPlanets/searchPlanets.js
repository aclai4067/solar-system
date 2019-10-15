import './searchPlanets.scss';
import $ from 'jquery';
import planets from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
// import planetCards from '../planetCards/planetCards';

const filterPlanetList = () => {
  const planetArr = planets.getPlanets();
  const searchTerm = $('#searchTerm').val().toLowerCase();
  const results = planetArr.filter((p) => p.name.toLowerCase().indexOf(searchTerm) !== -1 || p.description.toLowerCase().indexOf(searchTerm) !== -1
  || p.nameOfLargestMoon.toLowerCase().indexOf(searchTerm) !== -1);
  console.log(searchTerm, results);
  //   const searchType = $('#planetType').val();
//   for (let i = 0; i < planetArr.length; i += 1) {
//     if ($(`${planetArr[i].name}:contains('${searchTerm}')`)) {
//       console.log(searchTerm, planetArr[i].name);
//     //   planetCards.printPlanetCards();
//     }
//   }
};

const searchClick = () => {
  $('#filterPlanets').click(filterPlanetList);
};

const printSearchForm = () => {
  const searchString = `
  <form onsubmit='return false'>
    <div class='form-row'>
        <div class="form-group col-md-6 offset-md-2 col-8">
        <input type='text' class='form-control' id='searchTerm' placeholder='Enter Search Term' />
        </div>
        <div class='form-group col-md-1 col-4'>
        <select id="planetType" class="form-control">
            <option id='anyType' selected>Any Type</option>
            <option id='rock'>Rock Type</option>
            <option id='gas'>Gas Type</option>
        </select>
        </div>
        <button type="submit" id='filterPlanets' class="btn btn-outline-light">Search</button>
    </div>
  </form>
  `;
  utilities.printToDom('searchBar', searchString);
  searchClick();
};

export default { printSearchForm };
