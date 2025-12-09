import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

import Dashboard from "@/routes/dashboard"
import Login from "@/routes/login"
import AddInput from "@/pages/lab/AddInput"
import ListInputs from "@/pages/lab/ListInputs"
import PendingInputs from "@/pages/lab/PendingInputs"
import EditInput from "@/pages/lab/EditInput"

const Main = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lab/processor-inputs" element={<ListInputs />} />
        <Route path="/lab/processor-inputs/add" element={<AddInput />} />
        <Route path="/lab/processor-inputs/pending" element={<PendingInputs />} />
        <Route path="/lab/processor-input/:id/edit" element={<EditInput />} />
      </Routes>
    </HashRouter>
  )
}

export default Main
