import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const items = ["annay", "sabit", "shakib", "ratul", "arittra"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  function handleFilter(e) {
    e.preventDefault();
    const filterItemsList = items.filter((item) => {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchTerm("");
    // if (searchHistory.includes(filterItemsList.map((item) => item))) return;
    setSearchHistory((prev) => [filterItemsList, ...prev]);
  }

  return (
    <div className="App">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onHandleFilter={handleFilter}
        searchHistory={searchHistory}
      />
    </div>
  );
}

export default App;
