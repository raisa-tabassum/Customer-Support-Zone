import React from "react";

const TicketCard = ({ ticket }) => {
  // console.log(ticket)
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const priorityColor = {
    "HIGH PRIORITY": "text-[#F83044]",
    "MEDIUM PRIORITY": "text-[#FEBB0C]",
    "LOW PRIORITY": "text-[#02A53B]",
  };
  const statusColor = {
    Open: "bg-[#B9F8CF] text-[#02A53B]",
    "In-Progress": "bg-[#F8F3B9] text-[#FEBB0C]",
  };

  return (
    <div className="card card-border bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <button
            className={`btn border-none text-[16px] rounded-3xl ${statusColor[status]}`}
          >
            <i class="fa-solid fa-circle"></i>
            {status}
          </button>
        </div>
        <p>{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <p># {id}</p>
            <p className={`${priorityColor[priority]}`}>{priority}</p>
          </div>
          <div className="flex gap-3">
            <p>{customer}</p>
            <p>
              <i class="fa-regular fa-calendar"></i> {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
