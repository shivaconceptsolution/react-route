import './App.css';
import Hello from './Hello';
import Add from './Add';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hello />} />
          <Route path="hello" element={<Hello />} />
          <Route path="add" element={<Add />} />
          </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
