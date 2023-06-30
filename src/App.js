// // import logo from './logo.svg';
// import './App.css';
// import {useEffect, useState} from 'react';
// import Part from './component/ProfileCard';
// import Nav from './component/Navigationbar';
// import Nav1 from './component/Navigationbar';


// function App() {
//   const url=  "https://reqres.in/api/users?page=2"
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     fetch(url)

//     .then(response => response.json())

//     .then(json=>{
//       console.log(json.data);
//       setData(json.data);

//     })

//     .catch(e =>{
//           console.log("e",e)
//       })

//   } , [])





  
//   return (
//    <div className='App'>
//     <Nav1/>
//     <h1>Hello Greendzine</h1>
//     <Part/>
//     {/* <Part/> */}
    

//    </div>

//   );
// }

// export default App;

import './App.css';
import { useEffect, useState } from 'react'
import Navigationbar from './component/Navigationbar';
import ProfileCard from './component/ProfileCard';


function App() {

  const [data, setData] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  async function fetchData() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const dataSet = await response.json();
      setData(dataSet.data)
      setIsDataLoaded(true)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetching all the data once when the page load fro the first time
  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   console.log(data)
  // }, [data])


  const filterProfiles = (inputText) => {
    const filterData = data.filter((person) => inputText === person.first_name)
    console.log(filterData)
    setData(filterData)
  }


  return (
    <div className="App">
      {!isDataLoaded ? "Loading..." : <>
        <Navigationbar filterProfiles={filterProfiles} />
        <div className="container">
            <div className="row">

          {data.map((item) => {
            return < ProfileCard key={item.id} person={item} />
          })}
        </div>
        </div>
      </>}
    </div>
  );
}

export default App;


