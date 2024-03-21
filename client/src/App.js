import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </>
  );
}
