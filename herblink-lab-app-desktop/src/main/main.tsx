import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

import Dashboard from "@/routes/dashboard"
import Login from "@/routes/login"

const Main = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  )
}

export default Main
