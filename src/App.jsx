import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkbox from './components/Checkbox'
import { Home } from './components/Home'

  function App() {

    return (
      
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator' element={<Checkbox/>}/>
        </Routes>
      </Router>
    )
  }
  
  export default App
