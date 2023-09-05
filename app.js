
import {Route, Routes} from "react-router-dom";
import Home from "./section/home";
import about from "./section/about"
import resource from "./section/resource"
import contact from "./section/contact"
// import Header from "./component/Header";


function App (){

    return <div>
        {/* < Header /> */}

    <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<about />} />
        <Route path="/doners" element={<doners />} />
        <Route path="/resource" element={<resource />} />
        <Route path="/contact" element={<contact />} />
        
    
    </Routes>

    </div>
}

export default App