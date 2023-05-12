import React,{useState} from 'react'
import FastlaneHome from "./components/FastlaneHome";
import FastlaneLogin from "./components/FastlaneLogin";
function App() {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {

setLogin(true);
  }
  const signUpHandler = () => {

  }
  return (
    <>
  { !login && <FastlaneHome  onLogin={loginHandler}/>}
  {login && <FastlaneLogin/>}
    </>
  );
}

export default App;
