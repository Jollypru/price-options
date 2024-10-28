
import './App.css'
// import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PieChart from './components/PieChart/PieChart'
// import PriceOptions from './components/PriceOptions/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
      {/* <PriceOptions></PriceOptions> */}
      {/* <LineChart></LineChart> */}
      <PieChart></PieChart>
      <Phones></Phones>
    </>
  )
}

export default App
