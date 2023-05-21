import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect,useState } from 'react'

function Noticeboard() {
    const [events,setEvents]=useState([])

    useEffect(()=>{
        async function invoke (){
             const response= await fetch('http://localhost:8800/notice');
             const data=await response.json();
             setEvents(data.getEvents)
             
            
        }
       
  invoke();
    },[])
  
    
    
    
  return (
    <>
    <Navbar/>
   
    <div className="flex flex-col px-44">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Department</th>
              <th scope="col" className="px-6 py-4">Event</th>
              <th scope="col" className="px-6 py-4">Score</th>
            </tr>
          </thead>
          <tbody>
          
           {
            events.map((event,index)=>(
                  <tr key={event._id} className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
              <td className="whitespace-nowrap px-6 py-4">{event.stname} </td>
              
              <td className="whitespace-nowrap px-6 py-4">{event.department}</td>
              

              <td className="whitespace-nowrap px-6 py-4">{event.fields.map((element)=>(
                <div key={element.name}>{element.name}<br/></div>
              ))}</td>

            <td className="whitespace-nowrap px-6 py-4">{event.fields.map((element)=>(
                            <div key={element.name}>{element.score}<br/></div>
              ))}</td>
             
            </tr>
            ))
           }
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Noticeboard