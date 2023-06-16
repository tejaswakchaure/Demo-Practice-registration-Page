import { useRef, useState } from "react";

function MyRegistration(){

    let formRef = useRef();
    let [user , setUser] = useState({username :"",password:"",email:"",mobileNo:""});
    
    let takeUsername = (e) => {
      let newUser = {...user,username :e.target.value};
      setUser(newUser);
    };
    
    let takePassword = (e) => {
      let newUser = {...user,password:e.target.value};
      setUser(newUser);
    };
    
    let takeEmail = (e) => {
      let newUser = {...user,email:e.target.value};
      setUser(newUser);
    };
    let takeMobileNo = (e) => {
      let newUser = {...user,mobileNo:e.target.value};
      setUser(newUser);
    };
    let submited = async( ) => {

      formRef.current.className.add("was-validated");

      let formStatus = formRef.current.checkValidity();
      if(!formStatus){
        return;
      }

      let url = `http://127.0.0.1:4000/add?username=${user.username}&password=${user.password}&email=${user.email}&mobileNo=${user.mobileNo}`;
      await fetch(url);
    
      let update = {username :"",password:"",email:"",mobileNo:""};
      setUser(update);
    };
    
    
      return (
        <>
        <form ref={formRef} className="need-validation" noValidate>
        <input className="form-control" type="text" placeholder="username" value={user.username} onChange={takeUsername} required/>
        <input className="form-control" type="password" placeholder="password" value={user.password} onChange={takePassword} required/>
        <input className="form-control" type="email" placeholder="email" value={user.email} onChange={takeEmail} required/>
        <input className="form-control" type="text" placeholder="mobile number" value={user.mobileNo} onChange={takeMobileNo} />
        <input className="form-control btn btn-primary" type="button" value="Submit"  onClick={submited} />
        </form>
        </>
      );
    }
    export default MyRegistration;