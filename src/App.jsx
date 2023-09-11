import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Daily from "./components/pages/Daily"
import Weekly from "./components/pages/Weekly"
import Monthly from "./components/pages/Monthly"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
