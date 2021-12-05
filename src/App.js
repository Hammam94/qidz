import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {PageRoutes} from './routes';
import DashBoard from './pages/DashBoard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        <DndProvider backend={HTML5Backend}>
          {/* <PageRoutes /> */}
          <DashBoard />
        </DndProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
