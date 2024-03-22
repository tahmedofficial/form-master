import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusabeForm from './components/ReusableForm/ReusabeForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log(data);

  // }

  return (
    <>
      <h1>From Master</h1>

      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusabeForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusabeForm>
      <ReusabeForm formTitle={"Profile Update"} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Profile Update</h2>
          <p>please Profile Update right now</p>
        </div>
      </ReusabeForm> */}
    </>
  )
}

export default App
