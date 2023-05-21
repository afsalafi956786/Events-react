import {Route,Routes} from 'react-router-dom';
import Event from './pages/Event';
import EventShow from './pages/EventShow';
import Noticeboard from './pages/Noticeboard';
function App() {
  return (
    <Routes>
      <Route path='/'element={<Event/>}></Route>
      <Route path='/eventshow' element={<EventShow/>} ></Route>
      <Route path='/noticeboard' element={<Noticeboard/>} ></Route>

    </Routes>
  );
}

export default App;
