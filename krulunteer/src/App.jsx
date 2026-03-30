import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Find from './pages/Find'
import Post from './pages/Post'
import Login from './pages/Login'
import Detail from './pages/Detail'
// import User from './pages/Profile'
import Profile from './pages/Profile'
import Result from './pages/Result'
import Header from './components/Header'

import { useState } from "react";

function App() {
  const [teacher, setTeacher] = useState(null);
  const [staff, setStaff] = useState(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header teacher={teacher} setTeacher={setTeacher} staff={staff} setStaff={setStaff} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/post" element={<Post />} />
            <Route path="/login" element={<Login teacher={teacher} setTeacher={setTeacher} staff={staff} setStaff={setStaff} />} />
            <Route path="/find/detail" element={<Detail />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
