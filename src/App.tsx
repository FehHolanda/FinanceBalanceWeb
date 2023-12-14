import GlobalStyle from './Styles/global'
import RouteApp from './routes'

function App() {
  return (
    <>
    <div className='App'>
      <hr />
      <div className='AppGlass'>
        <RouteApp/>
      </div>     
    </div>
    <GlobalStyle/>
    </> 
  )
}

export default App
