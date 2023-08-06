import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login";

function App() {
  return (
    <div className="w-full min-h-[100vh]  align-center justify-center">
      <div className="w-full fixed flex bg-gray-900 py-[1.25rem] px-[5rem] align-center justify-between">
        <h1 className="text-bold text-3xl">MerZ</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
