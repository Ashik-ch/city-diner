import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuCategories } from "../menu.data";

const Menu = () => {
  const MotionDiv = motion.div;
  const [activeCategory, setActiveCategory] = useState(
    menuCategories[0].name
  );

  const activeData = menuCategories.find(
    (c) => c.name === activeCategory
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-10 md:flex-row md:gap-6">

      {/* LEFT SIDEBAR */}
      <aside className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:sticky md:top-24 md:mb-0 md:h-[calc(100vh-7rem)] md:w-60 md:overflow-y-auto">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
        </div>

        <div className="flex gap-2 overflow-x-auto md:flex-col">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`rounded-xl border px-4 py-2 text-left text-sm font-medium transition md:w-full ${
                activeCategory === cat.name
                  ? "border-transparent bg-white text-slate-900"
                  : "border-white/15 bg-transparent text-slate-200 hover:border-cyan-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <div className="flex-1">

        {/* CATEGORY HEADER */}
        <header className="mb-6">
          <span className="text-xs tracking-[0.2em] text-slate-400">FINE DINING EXPERIENCE</span>

          <h1 className="mt-1 text-4xl font-bold text-white">{activeData?.name}</h1>

          <p className="mt-2 text-slate-300">
            {activeData?.subtitles}
          </p>
        </header>

        {/* GRID (ONLY ACTIVE CATEGORY ITEMS) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {activeData?.items?.map((item, index) => (
            <MotionDiv
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-white">
                  {item.currency} {item.price}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white">
                  Add to Order
                </button>
              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;