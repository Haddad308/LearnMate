import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"
import UnAuthorized from "./pages/Auth/UnAuthorized"
import NotFound from "./pages/Auth/NotFound"
import AuthPage from "./pages/Auth/AuthPage"
import Login from "./pages/Auth/Login"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout/Layout"

const routers = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Dashboard /> }
    ]
  },
  {
    path: "auth", element: <AuthPage />, children: [
      { path: "login", element: <Login /> },
      { path: "forget", element: <ForgotPassword /> }
    ]
  },
  { path: "unauthorized", element: <UnAuthorized /> },
  { path: "*", element: <NotFound /> },

])

function App() {
  return (
    <ConfigProvider direction="rtl">
      <RouterProvider router={routers} />
    </ConfigProvider>
  )
}

export default App
