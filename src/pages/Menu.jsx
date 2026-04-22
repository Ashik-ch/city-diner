import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuCategories } from "../menu.data";
import "./Menu.css"; 

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0].name
  );

  const activeData = menuCategories.find(
    (c) => c.name === activeCategory
  );

  return (
    <div className="menu-layout">

      {/* LEFT SIDEBAR */}
      <aside className="menu-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Menu</h2>
        </div>

        <div className="sidebar-list">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`sidebar-item ${
                activeCategory === cat.name ? "active" : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <div className="menu-content">

        {/* CATEGORY HEADER */}
        <header className="menu-hero">
          <span>FINE DINING EXPERIENCE</span>

          <h1>{activeData?.name}</h1>

          <p className="subtitle">
            {activeData?.subtitles}
          </p>
        </header>

        {/* GRID (ONLY ACTIVE CATEGORY ITEMS) */}
        <div className="menu-grid">
          {activeData?.items?.map((item, index) => (
            <motion.div
              key={item.id}
              className="menu-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="img-wrap">
                <img src={item.img} alt={item.name} />
                <span className="price">
                  {item.currency} {item.price}
                </span>
              </div>

              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button className="btn">Add to Order</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;