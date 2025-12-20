import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const base_endpoint = "https://api.disneyapi.dev/character";

  useEffect(() => {
    if (!query.trim()) {
      setItems([]);
      return;
    }

    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(base_endpoint, {
          params: {
            name: query,
            pageSize: 20
          }
        });
        setItems(result.data.data || []);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setItems([]);
      }
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;