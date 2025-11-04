import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Footer/Footer'

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json();
}
const ticketsPromise = fetchTickets();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<p>Loading tickets...</p>}>
          <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
