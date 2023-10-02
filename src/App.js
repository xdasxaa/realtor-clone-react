import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Profiles from "./pages/Profiles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import Header from "./Component /Header";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/profiles" element={<Profiles/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
      </Routes>
    </Router>
 
  );
}

export default App;
