import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/5.login/Login'
import SetPassword from './pages/7.SetPassword/SetPassword'
import Home from '../src/pages/1.home/Home'
import MisTickets from '../src/pages/2.mistickets/MisTickets'
import TicketPurchase from '../src/components/ticketPurchaseView/TicketPricePrincipal'
import Grafica from '../src/pages/4.grafica/Grafica'
import ChartPage from './pages/8.AdminView/ChartPage'
import EventsPage from './pages/8.AdminView/EventsPage'
import PeoplePage from './pages/8.AdminView/PeoplePage'
import ScannerQR from './pages/3.escaner/ScannerQR'
import CompraPage from './pages/9.BuyPage/CompraPage'
import Checkout from './components/comprar/Checkout'



function App() {

  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/setPassword' element={<SetPassword/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/asda' element={<Home/>}/>
      <Route path='/misTickets' element={<MisTickets/>}/>
      <Route path='/ticketPurchase' element={<TicketPurchase/>}/>
      <Route path='/grafica' element={<Grafica/>}/>
      <Route path='/chartsView' element={<ChartPage/>}/>
      <Route path='/eventsView' element={<EventsPage/>}/>
      <Route path='/peopleView' element={<PeoplePage/>}/>
      <Route path='/scannerQR' element={<ScannerQR/>}/>
      <Route path='/buy' element={<CompraPage/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
