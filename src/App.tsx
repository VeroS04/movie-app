import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, NewReleases, Popular, Search, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="new-releases" element={<NewReleases />} />
          <Route path="search" element={<Search />} />
          <Route path="popular" element={<Popular />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
