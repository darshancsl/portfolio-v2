import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "../pages/Router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main id='main'>
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
