import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import Payment from "./Pages/Dashboard/Payment";
import Users from "./Pages/Dashboard/Users";
import DeveloperProfile from "./Pages/DeveloperProfile/DeveloperProfile";
import Faq from "./Pages/FAQ/Faq";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Pricing from "./Pages/Pricing/Pricing";
import Review from "./Pages/Review/Review";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />

          <Route
            path="addDoctor"
            element={
              <RequireAuth>
                <AddDoctor />
              </RequireAuth>
            }
          />

          <Route
            path="manageDoctor"
            element={
              <RequireAuth>
                <ManageDoctors />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/developer" element={<DeveloperProfile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
