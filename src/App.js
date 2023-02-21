import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Empty from "./components/Empty";
import AnimatorRoutes from "./components/AnimatorRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AnimatorRoutes />
        <Empty />
      </div>
      <Footer />
    </>
  );
}

export default App;
