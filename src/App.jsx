import './App.css'
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom'
import Checkbox from './components/Checkbox'
import { Home } from './components/Home'

  function App() {

    return (
      
      <Switch>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator' element={<Checkbox/>}/>
        </Routes>
      </Switch>
    )
  }
  
  export default App
