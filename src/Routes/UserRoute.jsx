import React from "react";
import { Routes, Route } from "react-router-dom";

import WidgetConfiguration from "../Pages/WidgetConfiguration";
import WidgetDisplayConfig from "../Pages/WidgetConfiguration";
import AccountSettings from "../Pages/AccountSettings";
import UploadSection from "../Pages/UploadSection";
import UploadListPage from "../Pages/UploadListPage";
import EditTranscript from "../Pages/EditTranscriptEditor";
import Login from "../components/Modals/Login";
import AddProject from "../components/Modals/AddProject";
import TranscriptPage from "../Pages/Transcript";
import ProjectsList from "../components/HomePageComponents/ProjectsList";
function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/transcript" element={<TranscriptPage />} />
        <Route path="/widget-configuration" element={<WidgetConfiguration />} />
        <Route path="/widget-displayConfig" element={<WidgetDisplayConfig />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/upload-listPage/:id" element={<UploadListPage />} />
        <Route path="/edit-transcript" element={<EditTranscript />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/project-list" element={<ProjectsList />} />
      </Routes>
    </>
  );
}

export default UserRoute;
