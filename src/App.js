import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import PostManagement from './components/PostManagement'
import Settings from './components/Settings'
import LineChartComponent from "./components/Dashboard/LineChart.js"
import ColumnChartComponent from './components/Dashboard/ColumnChart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>

          <div className='row' style={{ minHeight: "90vh" }}>
            <div className='col-lg-2 d-flex flex-column flex-shrink-0 p-3 text-center text-lg-end navigation'>
              <ul className='nav nav-pills flex-column mb-auto'>
                <li className='nav-item'>
                  <Link className='nav-link link-dark' to='/dashboard'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link link-dark' to='/post-management'>Post Management</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link link-dark' to='/settings'>Settings</Link>
                </li>
              </ul>

            </div>

            <div className='col-lg-10 p-3 content'>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />}>
                  <Route path="subcription" element={<LineChartComponent />} />
                  <Route path="revenue" element={<ColumnChartComponent />} />
                </Route>
                <Route path='/post-management' element={<PostManagement />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
