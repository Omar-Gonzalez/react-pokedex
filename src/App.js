import './App.css';
import {Fragment, useState, useEffect, useRef} from "react";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

const Header = () => {
  return (
    <div className={'header'}>
      <h1>Pokedex</h1>
      <p>A react based pokedex</p>
    </div>
  )
}

const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [resourceUrl, setResourceUrl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchPokemonList = async (limit, offset, pageUrl) => {
    const url = pageUrl ? pageUrl : `${API_BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
    try {
      const response = await fetch(url)
      const {results, previous, next} = await response.json();
      return {
        results: results,
        previous: previous,
        next: next
      }
    } catch (e) {
      console.log(e);
      return {
        results: [],
        previous: null,
        next: null
      }
    }
  }

  const nextPokemon = () => {
    try {
      setResourceUrl(pokemonList[parseInt(currentIndex) + 1]['url'])
      setCurrentIndex(parseInt(currentIndex) + 1)
    } catch (e) {
      //disable next pokemon button
    }
  }
  const prevPokemon = () => {
    try {
      setResourceUrl(pokemonList[parseInt(currentIndex) - 1]['url'])
      setCurrentIndex(parseInt(currentIndex) - 1)
    } catch (e) {
      //disable prev pokemon button
    }
  }


  const changePage = async (url) => {
    const {results, previous, next} = await fetchPokemonList(null, null, url)
    setPokemonList(results)
    setPrevious(previous)
    setNext(next)
  }

  useEffect(async () => {
    const {results, previous, next} = await fetchPokemonList(40, 0);
    setPokemonList(results)
    setPrevious(previous)
    setNext(next)
  }, [])

  return (
    <Fragment>
      {(() => {
        if (resourceUrl) {
          return <div className={'navbar'}>
            {(() => {
              return currentIndex >= 1 ?
                <button onClick={() => prevPokemon()} href="">&laquo; Previous Pokemon</button> : ''
            })()}
            {(() => {
              return currentIndex < pokemonList.length - 1 ?
                <button onClick={() => nextPokemon()} href="">Next Pokemon &raquo;</button> : ''
            })()}
          </div>
        }
      })()}
      <PokemonDetail resourceUrl={resourceUrl}></PokemonDetail>
      <div className={'navbar'}>
        {previous ? <button onClick={() => changePage(previous)} href="">&laquo; Previous Page</button> : ''}
        {next ? <button onClick={() => changePage(next)} href="">Next Page &raquo;</button> : ''}
      </div>
      <div className={'pokemon-grid'}>
        {
          pokemonList.map((pokemon, index) => {
            return <PokemonTile key={index} index={index} pokemon={pokemon} setResourceUrl={setResourceUrl}
                                setCurrentIndex={setCurrentIndex}></PokemonTile>
          })
        }
      </div>
    </Fragment>
  )
}

const PokemonDetail = ({resourceUrl}) => {
  const [prevUrl, setPrevUrl] = useState(null);
  const [name, setName] = useState('');
  const [artwork, setArtwork] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [forms, setForms] = useState([])
  const [baseExperience, setBaseExperience] = useState('')
  const [moves, setMoves] = useState([])
  const [locationAreas, setLocationAreas] = useState([])
  const [sprites, setSprites] = useState({})
  const [species, setSpecies] = useState({
    'habitat': {name: ''},
    'flavor_text_entries': [{name: ''}]
  })

  const fetchResource = async (url) => {
    if (url) {
      const response = await fetch(url);
      return await response.json();
    } else {
      return null
    }
  }

  const fetchLocations = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.warn(e)
      return []
    }
  }

  const fetchSpecies = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.warn(e)
      return {}
    }
  }

  useEffect(() => {
    if (resourceUrl !== prevUrl) {
      (async () => {
        const resource = await fetchResource(resourceUrl)
        if (resource) {
          //console.log(resource)
          const {name, abilities, forms, sprites, base_experience, moves, location_area_encounters, species} = resource;
          const artwork = sprites['other']['official-artwork']['front_default'] ? sprites['other']['official-artwork']['front_default'] : 'https://res.cloudinary.com/dlzzmbcfy/image/upload/v1543814600/placeholder_hmfbul.png';

          const locations = await fetchLocations(location_area_encounters)
          const speciesData = await fetchSpecies(species.url);

          //Updated component data
          setName(name)
          setArtwork(artwork)
          setAbilities(abilities)
          setPrevUrl(resourceUrl)
          setForms(forms)
          setBaseExperience(base_experience)
          setMoves(moves)
          setLocationAreas(locations)
          setSprites(sprites)
          setSpecies(speciesData)
        }
      })();
    }
  })

  return (
    <Fragment>
      {
        resourceUrl ? <div className={'pokemon-detail'}>
          <img className='artwork' src={artwork} alt="Pokemon Artwork"/>
          <h1>{name}</h1>
          <hr/>
          <div className='detail-container'>
            <div className='detail-tile'>
              <h2>Abilities</h2>
              <ul>
                {abilities.map((ability, index) => {
                  return <li key={index}>{ability.ability.name}</li>
                })}
              </ul>
              <h2>Forms</h2>
              <ul>
                {forms.map((form, index) => {
                  return <li key={index}>{form.name}</li>
                })}
              </ul>
              <h2>Base Experience</h2>
              <ul>
                <li>{baseExperience}</li>
              </ul>
            </div>
            <div className='detail-tile'>
              <h2>More Details</h2>
              <img src={sprites['front_default'] ? sprites['front_default'] : sprites['font_shiny']}
                   alt="Pokemon Front"/>
              <img src={sprites['back_default']}
                   alt="Pokemon Back"/>
              <p>{species['flavor_text_entries'][0]['flavor_text']}</p>
              <p>Habitat: <b>{species.habitat.name}</b>, Legendary: <b>{species['is_legendary'] ? 'Yes' : 'No'}</b>,
                Mythical: <b>{species['is_mythical'] ? 'Yes' : 'No'}</b></p>
            </div>
          </div>
        </div> : ''
      }
      <ExtendedDetails moves={moves} locations={locationAreas}></ExtendedDetails>
    </Fragment>
  )
}

const ExtendedDetails = ({moves, locations}) => {
  return (
    <Fragment>
      {(() => {
        if (moves.length > 0 || locations.length > 0) {
          return <div className='pokemon-detail'>
            <h2 className='text-center'>Moves</h2>
            <ul className={'long-list'}>
              {moves.map((move, index) => {
                return <li key={index}>{move.move.name}</li>
              })}
            </ul>
            <h2 className='text-center'>Locations</h2>
            <ul className={'long-list'}>
              {locations.map((location, index) => {
                return <li key={index}>{location.location_area.name}</li>
              })}
            </ul>
          </div>
        }
      })()}
    </Fragment>
  )
}

const PokemonTile = ({index, pokemon, setResourceUrl, setCurrentIndex}) => {
  const [iconUrl, setIconUrl] = useState('https://res.cloudinary.com/dlzzmbcfy/image/upload/v1543814600/placeholder_hmfbul.png')

  const fetchIconUrl = async (url) => {
    const pokemon = await fetch(url);
    const {sprites} = await pokemon.json();
    try {
      return sprites['front_default'];
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect(() => {
    (async () => {
      const icon = await fetchIconUrl(pokemon.url);
      setIconUrl(icon)
    })()
  })

  return (
    <div onClick={() => (() => {
      setResourceUrl(pokemon.url);
      setCurrentIndex(index)
    })()
    } className={'pokemon-tile'}><img src={iconUrl}/>{pokemon.name}
    </div>
  )
}

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <PokemonGrid></PokemonGrid>
    </Fragment>
  );
}

export default App;
