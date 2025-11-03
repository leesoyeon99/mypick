import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import MeetingRoom from './pages/MeetingRoom'
import Vehicle from './pages/Vehicle'
import Condolence from './pages/Condolence'
import Signage from './pages/Signage'
import Statistics from './pages/Statistics'
import Settings from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/meeting-room" element={<MeetingRoom />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/condolence" element={<Condolence />} />
        <Route path="/signage" element={<Signage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  )
}

export default App

