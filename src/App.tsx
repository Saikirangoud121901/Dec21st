import { BrowserRouter,Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cars from './Cars'
import Bikes from './components/Bikes'

export default function 
app() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      
      <Route path="/Home"element ={<Home/>}/>
      <Route path="/carnpm"element ={<Cars/>}/>
      <Route path="/bike"element ={<Bikes/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
