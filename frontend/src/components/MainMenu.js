import React from "react";
import { Link } from "react-router-dom";

const styles = {
  list: {
    listStyle: "none",
    display: "flex",
  },
  listItem: {
    margin: "0 5px",
  },
};

const MainMenu = ({ items }) => {
  return (
    <nav>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <Link to={item.page.slug}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
