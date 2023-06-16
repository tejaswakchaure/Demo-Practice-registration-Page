import { BrowserRouter,Route, Routes } from "react-router-dom";
import MyNavigationLink from "./pages/MyNavigationLink";
import MyRegistration from "./pages/MyRegistration";
import GetRegister from "./pages/getRegister";

function App() {
  return (
    <>
      <h1>This is for practice </h1>
      <BrowserRouter>
        <MyNavigationLink />
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/registration" element={<MyRegistration/>}/>
          <Route path="/getRegister" element={<GetRegister/>}/>
          <Route path="*" element={<h1>Page Not found...</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
