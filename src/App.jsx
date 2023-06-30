import "./App.css";
import MainComponent from "./MainComponent";
// import Home from "./components/Home/Home";
import MainComponentRenderer from "./components/MainComponentRenderer";

const App = () => {
  return (
    <>
    {/* <Routes>
        <Route path="/" element={<MainComponent/>}/>  
        </Routes>    */}
      <MainComponent />
      {/* <MainComponentRenderer/> */}
      {/* <Home/> */}
    </>
  );
};

export default App;
