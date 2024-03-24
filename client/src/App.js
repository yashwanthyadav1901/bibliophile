import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Library from "./components/Library";
import Favourites from "./components/Favourites";
import ToBeRead from "./components/ToBeRead";
import Collections from "./components/Collections";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route path="/library" element={<Library />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/toberead" element={<ToBeRead />} />
          <Route path="/collections" element={<Collections />} />
        </Route>
      </Routes>
    </>
  );
}
