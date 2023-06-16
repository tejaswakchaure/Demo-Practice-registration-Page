import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>This is for practice </h1>
      <BrowserRouter>
        <MyNavigationLink />
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function MyNavigationLink() {
  return (
    <>
      <Link to={"/home"}>Home |</Link>
      <Link to={"/registration"}> Registration |</Link>
    </>
  );
}
export default App;
