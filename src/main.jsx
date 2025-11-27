import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import TaskA from './pages/TaskA'
import TaskB from './pages/TaskB'
import TaskC from './pages/TaskC'
import TaskD from './pages/TaskD'
import TaskE from './pages/TaskE'
import TaskF from './pages/TaskF'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/a" element={<TaskA />} />
        <Route path="/task/b" element={<TaskB />} />
        <Route path="/task/c" element={<TaskC />} />
        <Route path="/task/d" element={<TaskD />} />
        <Route path="/task/e" element={<TaskE />} />
        <Route path="/task/f" element={<TaskF />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
