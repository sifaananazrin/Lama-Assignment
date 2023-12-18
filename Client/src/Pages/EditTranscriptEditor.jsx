import React, { useState } from "react";
import Header from "../components/Navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const TranscriptEditor = () => {
  const [transcript, setTranscript] = useState("");

  return (
    <>
    <Sidebar/>
    <div className="max-w-3xl mx-auto bg-white shadow p-6 mt-12">
      <Header />

      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Edit Transcript
      </h1>

      <div className="mb-4">
        <textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          className="w-full p-4 text-gray-700 leading-tight border rounded-lg focus:outline-none focus:shadow-outline"
          rows="10"
          placeholder="Type the transcript here..."
        ></textarea>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Discard
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save & exit
        </button>
      </div>
    </div>
    </>
  );
};

export default TranscriptEditor;
