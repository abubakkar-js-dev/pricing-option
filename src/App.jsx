import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    {/* <DaisyNav /> */}
    <Navbar />
      {/* <h2 className='text-3xl text center text-white bg-purple-400 p-4 rounded-full'>This is Heading with tailwindcss and daisyUi</h2> */}
      <PriceOptions />
    </>
  )
}

export default App
