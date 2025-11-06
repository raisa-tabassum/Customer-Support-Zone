import React, { use, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import { toast } from "react-toastify";

const CustomerTickets = ({
  ticketsPromise,
  setInProgressCount,
  setResolvedCount,
}) => {
  const ticketsData = use(ticketsPromise);
  // console.log("Fetched Tickets:",ticketsData)

  // Local state
  const [selectedTickets, setSelectedTickets] = useState([]); // Currently selected tickets (Task Status)
  const [resolvedTickets, setResolvedTickets] = useState([]); // Tickets remaining in main list
  const [tickets, setTickets] = useState(ticketsData);

  const handleSelect = (ticket) => {
    // Add ticket to selectedTickets
    setSelectedTickets([...selectedTickets, ticket]);
    // To Show Toast notification
    toast(`${ticket.title} _ Added to Task`);
    // Increment In-Progress count
    setInProgressCount((count) => count + 1);
  };
  const handleComplete = (ticket) => {
    // Remove from Task Status
    setSelectedTickets(selectedTickets.filter((t) => t.id !== ticket.id));
    // Remove from main list
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    // Show completion toast
    toast(`${ticket.title} _ Completed!`);
    // Decrement In-Progress count
    setInProgressCount((count) => count - 1);
    // Increment Resolved count
    setResolvedCount((count) => count + 1);
    // Add to Resolved tickets
    setResolvedTickets([...resolvedTickets, ticket]);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-20 pb-16 flex flex-col md:flex-row sm:items-center md:items-start justify-between gap-2">
      {/* Customer Tickets list */}
      <div className="w-9/12">
        <h1 className="text-3xl font-semibold text-[#34485A]">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {tickets.map((ticket) => (
            <TicketCard
              cardClick={() => handleSelect(ticket)}
              key={ticket.id}
              ticket={ticket}
            ></TicketCard>
          ))}
        </div>
      </div>
      <div className="w-4/12">
      {/* Task Status Section */}
        <div className="mb-6">
          <h1 className="mb-3 text-3xl font-semibold text-[#34485A] pl-4">
            Task Status
          </h1>
          {selectedTickets.length === 0 ? (
            <p className="text-lg text-[#627382] pl-4">
              Select a ticket to add to Task Status
            </p>
          ) : (
            <div className="card-body w-96 sm:pr-18">
              {selectedTickets.map((ticket) => (
                <div key={ticket.id} className="card shadow-md p-4 rounded-md">
                  <h2 className="font-semibold mb-3 text-lg">{ticket.title}</h2>
                  <button
                    onClick={() => handleComplete(ticket)}
                    className="btn bg-[#02A53B] text-white text-xl rounded-lg py-4"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Resolved Tasks Section */}
        <div>
          <h1 className="mb-3 text-3xl font-semibold text-[#34485A] pl-4">
            Resolved Task
          </h1>
          {resolvedTickets.length === 0 ? (
            <p className="text-lg text-[#627382] pl-4">
              No resolved tasks yet.
            </p>
          ) : (
            <div className="card-body w-96 sm:pr-9">
              {resolvedTickets.map((ticket) => (
                <div key={ticket.id} className="card shadow-md p-4 rounded-md">
                  <h2 className="font-semibold mb-3 text-lg">{ticket.title}</h2>
                  <button className="btn bg-green-200 text-[#02A53B] text-xl rounded-lg py-4">
                    ✔ Completed
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
