import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Category/>
      <Pages/>
     </BrowserRouter>
    </div>
  );
}

export default App;
