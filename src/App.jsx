// DEPENDENCIES
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
// HOOKS / COMPONENTS
import { MovieList } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
// STYLES
import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='App'>

      <header>
        <h2>POC Search Movies with Fetching & CustomHooks</h2>
      </header>

      <main>
        <div className='search'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }} onChange={handleChange} value={search} name='query' placeholder='Avengers, The Matrix...'
            />
            <button type='submit'>Search</button>
            <label htmlFor="orderByName">
              Order by name
              <input name="orderByName" type='checkbox' onChange={handleSort} checked={sort} />
            </label>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        {
          loading ? <p>Loading...</p> : <MovieList movies={movies} />
        }

      </main>

      <footer>
        <p>
          Proof of Concept created by{" "}
          <a href="https://tonii.dev" target="_blank">
            Antonio Delgado
          </a>
        </p>
        <span>Vite + React</span>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
