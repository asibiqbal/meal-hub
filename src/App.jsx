
import { Suspense } from 'react'
import './App.css'
import Item from './component/Item/Item'
import Navbar from './component/Navbar/Navbar'

const fetchMeals = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading Meal Items....</p>}>
        <Item fetchMeals={fetchMeals} ></Item>
      </Suspense>
    </>
  )
}

export default App
