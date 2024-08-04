import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import Auth from "./pages/auth";
import { FinancialRecordsProvider } from "./context/financialRecordContext";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="dashboard"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              }
            />
            <Route path="" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
