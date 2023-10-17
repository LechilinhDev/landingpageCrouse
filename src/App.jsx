
import Topbar from './components/Topbar/Topbar';
import Banner from './components/Banner/Banner';
import Infomation from './components/section/infomation';
import TechingStaff from './components/section/techingStaff';
import './App.scss'

const App = () => {


  return (
    <>
      <div className="container">
        <Topbar />
        <Banner />
        <Infomation />
        <TechingStaff />
      </div>
    </>
  )
}

export default App
