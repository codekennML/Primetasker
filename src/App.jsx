import React from "react";
import Navbar from "./components/Navbar";
import Index from "./Pages/Index";
import { Routes, Route, Router, useOutletContext } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import RequireAuth from "./features/auth/pages/RequireAuth";
import Signup from "./features/auth/pages/Signup";
import Bookings from "./Pages/dashboard/admin/Bookings";
import Properties from "./Pages/dashboard/admin/Properties";
import Prefetch from "./hooks/Prefetch";
import PersistLogin from "./features/auth/pages/PersistLogin";
import Users from "./Pages/dashboard/admin/Users";
import Sidebar from "./Pages/dashboard/admin/Sidebar";
import Analytics from "./Pages/dashboard/admin/Analytics";
import Agents from "./Pages/dashboard/admin/Agents";
import Guests from "./Pages/dashboard/admin/Guests";
// import Notes from "./Pages/dashboard/admin/Notes";
import Tasks from "./features/tasks/pages/Tasks";
import CreateTask from "./features/tasks/pages/CreateTask";
import EditTask from "./features/tasks/pages/EditTask";
import SingleTask from "./features/tasks/pages/SingleTask";
import EditNotes from "./features/notes/EditNotes";
import Property from "./features/properties/Property";
import ModifyProperty from "./features/properties/ModifyProperty";
import AddNewProperty from "./features/properties/AddNewProperty";
import Booking from "./features/bookings/pages/Bookings";
import AddNewBooking from "./features/bookings/AddNewBooking";
import ModifyBooking from "./features/bookings/ModifyBooking";
import SearchResults from "./components/SearchResults";
import { ROLES } from "./app/config";
import SingleProperty from "./components/SingleProperty";
import SideTab from "./Pages/dashboard/admin/Settings/SideTab";
import Profile from "./Pages/dashboard/admin/Settings/Profile";
import Theme from "./Pages/dashboard/admin/Settings/Theme";
import UserSettings from "./Pages/dashboard/admin/Settings/UserSettings";
import Categories from "./Pages/dashboard/admin/Settings/Categories";
import Payments from "./Pages/dashboard/admin/Settings/Payments";
import Cities from "./Pages/dashboard/admin/Settings/Cities";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./utils/Error";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import PasswordReset from "./features/auth/pages/PasswordReset";
import UserSidebar from "./Pages/dashboard/User/UserSidebar";
import UserAnalytics from "./Pages/dashboard/User/UserAnalytics";
import Verify from "./Pages/dashboard/User/Verify";
import Create from "./Pages/dashboard/User/Create";
import PostTask from "./features/tasks/pages/PostTask/PostTaskForm";

import FindItems from "./components/FindItems";
import CreateService from "./components/CreateService";
import BrowseTasks from "./components/BrowseTasks";

import HomePage from "./components/HomePage";
import ModalProvider from "./features/modal/ModalProvide";
import PostTaskSuccess from "./features/tasks/pages/PostTask/PostTaskSuccess";
import TaskSidebar from "./features/tasks/pages/TaskSidebar";

import Map from "./features/tasks/Map";
import TaskMainDisplay from "./features/tasks/pages/TaskMainDisplay";

import MyTasks from "./Pages/dashboard/User/MyTaskView";
import MyTasksInfiniteScroll from "./Pages/dashboard/User/MyTaskScroll";
import MyTasksView from "./Pages/dashboard/User/MyTaskView";

import UserProfile from "./Pages/dashboard/User/Profile";
import Notes from "./Pages/dashboard/User/Notes";
import ChatUser from "./Pages/dashboard/User/Messages/ChatUser";
import Transaction from "./Pages/dashboard/User/Transaction";
// import Portfolio from "./Pages/dashboard/User/Portfolio";
import Showcase from "./Pages/dashboard/User/Showcase";
import Alerts from "./Pages/dashboard/User/Alerts";
import CreateAlert from "./Pages/dashboard/User/CreateAlert";

const lib = ["places"];
// AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw"
// AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw
//AIzaSyDdYME_PrW_WGGcJOdDpGLym58HFmFpdBw
function App() {
  const darkMode = useSelector((state) => state.theme.dark);
  const colorTheme = darkMode ? "dark" : "light";
  const altTheme = colorTheme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(altTheme);
    root.classList.add(colorTheme);
    localStorage.setItem("theme", colorTheme);
  }, [darkMode]);

  const [theme, setTheme] = useState(localStorage.theme);

  return (
    <div className="  dark:bg-gray-700 dark:transform:transition-all dark:duration-700 dark:ease-in dark:delay-300">
      <ModalProvider />
      <Toaster />
      <Routes>
        {/* Links visible to unauthenticated Users */}
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<Prefetch />}>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="single-property" element={<SingleProperty />} />
            <Route path="create/post-a-task" element={<PostTask />} />
            <Route path="create/find-item" element={<FindItems />} />
            <Route path="create/create-service" element={<CreateService />} />

            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="password-reset" element={<PasswordReset />} />
            <Route path="signup" element={<Signup />} />

            <Route path="tasks/" element={<TaskSidebar />}>
              <Route path=":id" element={<TaskMainDisplay />} />
            </Route>

            <Route
              element={<RequireAuth allowedRoles={["Tasker", "Customer"]} />}
            >
              <Route
                path="create/post-task-success"
                element={<PostTaskSuccess />}
              />
            </Route>

            {/* Routes to admin dashboard are protected by the RequireAuth Component */}

            <Route
              element={<RequireAuth allowedRoles={["Tasker", "Customer"]} />}
            >
              <Route
                path="create/post-task-success"
                element={<PostTaskSuccess />}
              />

              <Route path="dashboard" element={<UserSidebar />}>
                <Route index element={<UserAnalytics />} />
                <Route path="verify" element={<Verify />} />
                <Route path="create">
                  <Route index element={<Create />} />
                  <Route path="create-alert" element={<CreateAlert />} />
                </Route>
                <Route path="verify" element={<Verify />} />
                <Route path="messages" element={<Notes />} />
                <Route path="messages" element={<Notes />} />
                <Route path="transactions" element={<Transaction />} />

                <Route path="settings">
                  <Route path="my-profile" element={<UserProfile />} />
                  {/* <Route path="my-portfolio" element={<Portfolio />} /> */}
                  <Route path="my-showcase" element={<Showcase />} />
                  <Route path="my-alert-settings" element={<Alerts />} />
                </Route>
              </Route>

              <Route path="my-tasks/" element={<MyTasksInfiniteScroll />}>
                <Route path=":id" element={<MyTasksView />} />
              </Route>
            </Route>

            <Route
              element={<RequireAuth allowedRoles={["Manager", "Admin"]} />}
            >
              <Route path="admin-dashboard" element={<Sidebar />}>
                <Route index element={<Analytics />} />
                {/* <Route path="overview" element={<Analytics />} /> */}
                <Route path="users" element={<Users />} />
                {/* <Route path="users" element={<Users />} /> */}
                <Route path="agents" element={<Agents />} />
                <Route path="guests" element={<Guests />} />

                {/* <Route path="notes">
                  <Route index element={<Notes />} />
                  <Route path=":id" element={<EditNotes />} />
                </Route> */}

                <Route path="bookings">
                  <Route index element={<Booking />} />
                  <Route path="create" element={<AddNewBooking />} />
                  <Route path="single-booking/:id" element={<Booking />} />
                  <Route path="edit/:id" element={<ModifyBooking />} />
                </Route>

                <Route path="tasks">
                  <Route index element={<Tasks />} />
                  <Route path="create" element={<CreateTask />} />
                  <Route path="single-task/:id" element={<SingleTask />} />
                  <Route path="edit/:id" element={<EditTask />} />
                </Route>

                <Route path="properties">
                  <Route index element={<Properties />} />
                  <Route path="create" element={<AddNewProperty />} />
                  <Route path="single-property/:id" element={<Property />} />
                  <Route path="edit/:id" element={<ModifyProperty />} />
                </Route>

                <Route path="settings" element={<SideTab />}>
                  <Route index element={<Profile />} />
                  <Route path="theme" element={<Theme />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="users" element={<UserSettings />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="payments" element={<Payments />} />
                  <Route path="cities" element={<Cities />} />
                </Route>
              </Route>
            </Route>

            {/* </Route> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
