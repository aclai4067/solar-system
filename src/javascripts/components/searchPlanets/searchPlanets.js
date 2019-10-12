import './searchPlanets.scss';
import utilities from '../../helpers/utilities';

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
};

export default { printSearchForm };
