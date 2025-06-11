import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import Header from "../components/Header";
import MoviesPage from "./MoviesPage";
import SeriesPage from "./SeriesPage";
import ProfilePage from "./ProfilePage";
import LatestPage from "./LatestPage";
import CollectionsPage from "./CollectionsPage";

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
            <Route path="latest" element={<LatestPage />} />
            <Route path="collections" element={<CollectionsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
