import NavBar from "./Components/NavBar/NavBar";
import Home from "./Containers/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:title" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
