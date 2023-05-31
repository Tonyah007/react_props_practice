import "./App.css";
import ProfilePhoto from "./PROFILE-IMAGE.jpeg";
import Profile from "./Component/Profile/Profile";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <main> 
      <Profile 
        fullName="Tonia Bernard" 
        address="Abuja, Nigeria" 
        profession="Software Engineer" 
        bio="Programmer,  Accountant"
        >
        {ProfilePhoto}
      </Profile>
    </main>
  );
}

export default App;
