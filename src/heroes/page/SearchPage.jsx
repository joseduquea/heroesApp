import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search)

  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0 );
  const showError = (q.length > 0 ) && heroes.length === 0;

  const {searchHero, onInputChange} = useForm({
    searchHero: q
  });
   
  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if(searchHero.trim().length <= 1)return;

    navigate(`?q=${searchHero}`)
  }

  return (
    <>
      <hr />

      <div className="row">
        <div className="col-6">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search a Hero "
              className="form-control"
              name="searchHero"
              autoComplete="off"
              value={ searchHero}
              onChange={onInputChange}
              />

              <button className="btn btn-outline-light mt-2">
                Search
              </button>
          </form>
        </div>

        <div className="col-6 ">
            <h4>Results</h4>
            <hr />
 
            {/*{
              (q === '')
              ? <div className="alert alert-primary">Search a Hero </div>
              : (heroes.length === 0)
              && <div className="alert alert-danger">It was not found <b>{q}</b></div>
            }*/}

            <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{display: showSearch ? '' : 'none'}}>
              Search a Hero 
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
              style={{display: showError ? '' : 'none'}}>
              It was not found <b>{q}</b>
            </div>

            {
              heroes.map(hero => (
                <HeroCard  key={hero.id} {...hero}/>
              ))
            }
        </div>
      </div>
      
    </>
  )
}
