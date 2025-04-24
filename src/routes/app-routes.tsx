import DashboardLayout from '@layouts/dashboard-layout'
import { Route, Routes } from 'react-router'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  )
}
