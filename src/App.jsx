import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>

      <main className="bg-slate-50">
        <Banner
          resolvedCount={resolvedCount}
          inProgressCount={inProgressCount}
        ></Banner>

        <Suspense fallback={<p>Loading tickets...</p>}>
          <CustomerTickets
            setInProgressCount={setInProgressCount}
            resolvedCount={resolvedCount}
            setResolvedCount={setResolvedCount}
            ticketsPromise={ticketsPromise}
          ></CustomerTickets>
        </Suspense>
      </main>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
