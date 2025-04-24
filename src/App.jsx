import { useState } from "react";
import { motion } from "framer-motion";
import { mockIncidents } from "./data/mockIncidents";
import IncidentList from "./components/IncidentList";
import IncidentFilter from "./components/IncidentFilter";
import IncidentSort from "./components/IncidentSort";
import IncidentForm from "./components/IncidentForm";
import { ToastContainer } from 'react-toastify';

let nextId = 4;

const App = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");
  const [showForm, setShowForm] = useState(false);

  const filteredIncidents = incidents
    .filter((i) => filter === "All" || i.severity === filter)
    .sort((a, b) =>
      sort === "newest"
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at)
    );

  const handleNewIncident = (incident) => {
    setIncidents([{ ...incident, id: nextId++ }, ...incidents]);
    setShowForm(false);
  };

  return (
    <>
      <ToastContainer />

      {/* GitHub Icon */}
      <div className="absolute top-4 right-4">
        <a
          href="https://github.com/Kanchan3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-10 h-10 text-[#f0abfc] hover:text-[#d946ef] transition-colors duration-300"
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.112.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.728.083-.728 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3-.403c1.018.005 2.043.137 3 .403 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.478 5.922.43.372.81 1.102.81 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        </a>
      </div>

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Page Title with Text Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#c98ed2] to-[#ec489d] mt-2 mb-16 text-center"
        >
          AI Safety Incident Dashboard
        </motion.h1>

        {/* Filter and Sort Controls */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <IncidentFilter selected={filter} onChange={setFilter} />
          <IncidentSort order={sort} onChange={setSort} />
        </div>

        {/* Incident List Column */}
        <IncidentList incidents={filteredIncidents} />

        {/* Report Button Column */}
        <div className="text-center mt-8">
          <button
            className="bg-[#c084fc] hover:bg-[#a855f7] text-white font-medium px-6 py-2 rounded transition"
            onClick={() => {
              setShowForm((prev) => {
                const newState = !prev;
                setTimeout(() => {
                  if (newState) {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }
                }, 0);
                return newState;
              });
            }}
          >
            {showForm ? "Cancel Report" : "Report New Incident"}
          </button>
        </div>

        {/* Form Column */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IncidentForm onSubmit={handleNewIncident} />
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative bottom mt-24 mb-2 left-0 right-0 text-center text-black text-sm">
        Built by
        <a
          href="https://kkd-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563eb] hover:underline ml-1"
        >
          @Kanchan_Dasila
        </a>
      </footer>
    </>
  );
};

export default App;
