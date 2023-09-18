import Home from "./components/home";
import ShowData from "./components/ShowData";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:domainName/*" element={<ShowData/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
