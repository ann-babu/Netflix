
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar";
import Row from "./Components/RowPost/Row";

import {action,originals,comedy} from './Components/RowPost/url'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Row url={originals} title='Netflix Originals'/>
     <Row url={action} title='Action Movies' isSmall/>
     <Row url={comedy} title='Comedy Movies' isSmall/>
    
    </div>
  );
}

export default App;
