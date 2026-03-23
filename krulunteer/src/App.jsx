import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Find from './pages/Find'
import Post from './pages/Post'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/post" element={<Post />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
