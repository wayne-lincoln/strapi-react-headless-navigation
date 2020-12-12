import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Page from "./components/Page";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://localhost:1337/main-menu");
      const data = await res.json();

      if (data.items) {
        setItems(data.items);
      }
    };

    fetchItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <MainMenu items={items} />
        <Switch>
          <Route path="/:slug">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
