import React, { use} from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerTickets = ({ticketsPromise}) =>{

    const ticketsData = use(ticketsPromise)
    console.log("Fetched Tickets:",ticketsData) 
    return (
        <div className='max-w-[1200px] mx-auto my-20 flex justify-between gap-10'>
            <div className='w-9/12'>
                <h1 className='text-3xl font-semibold text-[#34485A]'>Customer Tickets</h1>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                    {
                        ticketsData.map(ticket=>
                            <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
                        )
                    }
                </div>
            </div>
            <div className='w-3/12'>
                <div className='mb-12'>
                    <h1 className='mb-3 text-3xl font-semibold text-[#34485A]'>Task Status</h1>
                    <p className='text-lg text-[#627382]'>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h1 className='mb-3 text-3xl font-semibold text-[#34485A]'>Resolved Task</h1>
                    <p className='text-lg text-[#627382]'>No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;