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


