import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";
import {Product} from "./components/product";


function App() {
  return (
      <Router>
        <div className="App">


            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
