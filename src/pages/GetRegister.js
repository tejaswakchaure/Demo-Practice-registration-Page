import { useEffect, useState } from "react";

function GetRegister() {

  let [user, setUser] = useState([]);

  useEffect(() => {
    readData();
  }, []);
  let readData = async () => {
    let url = "http://127.0.0.1:4000/read";
    let res = await fetch(url);
    let list = res.json();

    let updatedList = [...list];
    setUser(updatedList);
  };

  return (
    <>
      <h1>User List</h1>
      {/* <input type="button" value="click here to get data ...." onChange={getAllRegistration} /> */}

      {user.map((item) => (
        <>
          <div>
            {item.username} {item.password} {item.email} {item.mobileNo}
          </div>
        </>
      ))};
    </>

  );
}

export default GetRegister;