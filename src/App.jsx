import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Daily from "./components/pages/Daily"
import Weekly from "./components/pages/Weekly"
import Monthly from "./components/pages/Monthly"
import "../public/data.json"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../public/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/daily" element={<Daily data={data} />} />
          <Route path="/weekly" element={<Weekly data={data} />} />
          <Route path="/monthly" element={<Monthly data={data} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
