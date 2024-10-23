
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Header/Banner'
import OurRecipe from './components/Header/OurRecipe'

function App() {


  return (
    <div className='container px-4 mx-auto'>
      {/* header  */}
      <Header></Header>
      {/* banner */}
      <Banner></Banner>
      {/* recipe section  */}
      <OurRecipe></OurRecipe>

    </div>
  )
}

export default App
