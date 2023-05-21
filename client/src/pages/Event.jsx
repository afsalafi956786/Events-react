import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();
  const handleSubmit=async (event)=>{

    try{

 event.preventDefault();
    const data=new FormData(event.currentTarget);
    const obj={
      stname:data.get('name'),
      department:data.get('department'),
      fields:[],
    }
    const pairs={
      Football:'football_score',
      Boxing:'box_score',
      Tennis:'tennis_score',
      Fishing:'fish_score',
      Karate:'kara_score',
      Shooting:'shoot_score',
      Racing:'race_score',
      Swimming:'swim_score',
      Jumbing:'jumb_score',
      Chess:'chess_score',
      Climbing:'climb_score',
      Running:'run_score',
    }
    let pairsCount = 0;

    for (const key of Object.keys(pairs)) {
      const checkboxValue = data.get(key);
      const scoreKey = pairs[key];
      const scoreValue = data.get(scoreKey);
  
      if (checkboxValue && scoreValue) {
        pairsCount++;
        obj.fields.push({ name: key, value: checkboxValue, score: scoreValue });
      }
    }
  
    
    
    if (pairsCount <= 5 && obj.stname.trim() !== '' && obj.department.trim() !== '' && obj.fields.length > 0) {
      let response=await fetch('http://localhost:8800/event',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
          'content-type':'application/json',
        },
      })
      const data=await response.json();
      console.log(data,'--------');
      if(data.status === 'success'){
        toast.success(`Wow! ${data?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
           navigate('/eventshow',{state:data})
        }, 2000);
       
      }
    
      
      
      
      
    } else {
      console.log('Please fill in name and department, and provide at most five additional fields.');
      toast.error(`fill name and department and can participate in up to five events!!.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    }catch(error){
      console.log(error.message);
    }
    
   

 
  }

 

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-8 ">
      <ToastContainer />
        <form onSubmit={handleSubmit}>
        <div className="xl:w-10/12 w-full px-8">
          <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
            <h1 className="text-4xl text-red-600">Events</h1>
          </div>

          <div className="xl:px-2">
            <div className="mt-4 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
              <div>
                <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                  Student Information
                </h1>
                <div className="md:flex items-center  -ml-8 lg:mt-0 ">
                  <div className="md:w-64 md:ml-12 md:mt-4 mt-4">
                    <label className="text-md leading-none text-gray-800 ">
                      student name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your department"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100">
                <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                  Event details
                </h1>
                <p>you can select only 5 event which is you participated</p>
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Football"
                        value="FootBall"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Football
                      </label>
                      <p className="text-gray-500">
                        If you participate football check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="football_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100 ml-4 mt-12">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Running"
                        value="Running"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Running
                      </label>
                      <p className="text-gray-500">
                        If you participate Running check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="run_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ..... */}

            {/* ... */}

            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100 ">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Boxing"
                        value="Boxing"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Boxing
                      </label>
                      <p className="text-gray-500">
                        If you participate Boxing check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="box_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100  ml-4">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Tennis"
                        value="Tennis"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Tennis
                      </label>
                      <p className="text-gray-500">
                        If you participate Tennis check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="tennis_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* .... */}

            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Fishing"
                        value="Fishing"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Fishing
                      </label>
                      <p className="text-gray-500">
                        If you participate fishing check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                    
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="fish_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100  ml-4">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Karate"
                        value="Karate"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Karate
                      </label>
                      <p className="text-gray-500">
                        If you participate Karate check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="kara_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ... */}
            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Climbing"
                        value="Climbing"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Climbing
                      </label>
                      <p className="text-gray-500">
                        If you participate climb check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="climb_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100  ml-4">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Shooting"
                        value="Shooting"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Shooting
                      </label>
                      <p className="text-gray-500">
                        If you participate Shoot check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label
                      className="text-sm leading-none text-gray-800"
                      id="lastName"
                    >
                      Score
                    </label>
                    <input
                      type="number"
                      name="shoot_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* .... */}

            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Racing"
                        value="Racing"
                        type="checkbox"
                        className="h-4 cursor-pointer w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                    
                        className="font-medium text-gray-700"
                      >
                        Racing
                      </label>
                      <p className="text-gray-500">
                        If you participate Race check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800">
                      Score
                    </label>
                    <input
                      type="number"
                      name="race_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100  ml-4">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Swimming"
                        value="Swimming"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        Swimming
                      </label>
                      <p className="text-gray-500">
                        If you participate Swim check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800">
                      Score
                    </label>
                    <input
                      type="number"
                      name="swim_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* .... */}

            <div className="mt-4 lg:flex justify-between  border-gray-200  mb-4">
              <div className="md:w-48/100">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Jumbing"
                        value="Jumbing"
                        type="checkbox"
                        className="h-4 cursor-pointer w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        jumbing
                      </label>
                      <p className="text-gray-500">
                        If you participate jumb check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800">
                      Score
                    </label>
                    <input
                      type="number"
                      name="jumb_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-48/100  ml-4">
                <div className="md:flex items-center lg:mt-0 ">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        name="Chess"
                        value="Chess"
                        type="checkbox"
                        className="h-4 cursor-pointer w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">Chess</label>
                      <p className="text-gray-500">
                        If you participate Chess check this
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                    <label className="text-sm leading-none text-gray-800">
                      Score
                    </label>
                    <input
                      type="number"
                      name="chess_score"
                      min="1"
                      max="20"
                      className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none  text-md font-medium  text-gray-800"
                      placeholder="Enter your score"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-12">
              <button type="submit"  className="bg-red-600 p-3 text-white font-bold text-xl hover:bg-red-500 rounded-lg w-[50%] ">
                Submit
              </button>
            </div>
          </div>

        </div>
        </form>

      </div>
    </>
  );
}

export default Event;
