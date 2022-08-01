import Info from "./components/Profile";
import Profile from "./components/Info";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="container bg-[#23252C] mx-auto">
      <div className="max-w-[390px] bg-[#1A1B21] mx-auto ">
        <Info />
        <Profile />
        <Logo />
      </div>
    </div>
  );
}

export default App;
