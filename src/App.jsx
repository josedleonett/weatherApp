import './App.css'
import { Icon } from "./components/atoms/icon/Icon";
import { WiDayCloudyGusts } from "react-icons/wi";

function App() {

  return (
    <>
    <p>hola</p>
    <WiDayCloudyGusts color='red'/>
      <Icon>
        <WiDayCloudyGusts/>
      </Icon>
    </>
  )
}

export default App
