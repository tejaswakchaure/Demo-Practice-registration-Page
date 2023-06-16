import { Link } from "react-router-dom";
function MyNavigationLink() {
    return (
      <>
        <Link to={"/home"}>Home |</Link>
        <Link to={"/registration"}> Registration |</Link>
        <Link to={"/getRegister"}>Register users |</Link>
      </>
    );
  }

  export default MyNavigationLink;