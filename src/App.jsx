import { BrowserRouter } from "react-router-dom"
import Routepath from "./component/router_dom"
import DashBoard from "./layouts/DashBoard"
// import Header from "./component/Header"
// import Footer from "./component/Footer"


function App() {
  

  return (
    <BrowserRouter>
      <DashBoard>
      <Routepath/>
      </DashBoard>
      
     
    </BrowserRouter>
  )
}

export default App
