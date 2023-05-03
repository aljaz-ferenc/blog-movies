import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
