import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom';
function EventShow() {
    const location = useLocation();
    const { state: data } = location;

    let obj=data.obj;
    
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
            <h1 className="text-4xl text-red-600">Events</h1>
          </div>
          
      <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
            <h1 className="text-4xl text-red-600">Your Events</h1>
          </div>

      <div className="flex items-center justify-center mt-6 ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">

          {
            obj.fields.map((field,index)=>(
                <div key={index} className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-500 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 text-xl font-bold ">
              Name:  {obj.stname}
              </h4>
              <h4 className="text-gray-800 dark:text-gray-100 text-xl mb-8 font-bold">
              Department:  {obj.department}
              </h4>
              <h1 className="text-gray-800 dark:text-gray-100 font-bold text-3xl">
             Event: {field.value}
              </h1>
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-800">
                <p className="text-xl text-red-300">Score: {field.score}</p>
              
              </div>
            </div>
          </div>
            ))
          }
             
     
         



        </div>
      </div>
    </>
  );
}

export default EventShow;
