import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import Header from "../components/Header";
import MoviesPage from "./MoviesPage";
import SeriesPage from "./SeriesPage";
import ProfilePage from "./ProfilePage";

function DashboardPage() {
    return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <main className="main-area">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage