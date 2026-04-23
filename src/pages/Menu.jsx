import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X as CloseIcon } from "lucide-react";
import { menuCategories } from "../menu.data";
import bgImage from "../assets/bgImage3.jpg";

const Menu = ({ onAddToCart }) => {
  const MotionDiv = motion.div;
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = useMemo(() => {
    return menuCategories.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, categoryName: cat.name }))
    );
  }, []);

  const activeData = menuCategories.find((c) => c.name === activeCategory);

  const displayItems = useMemo(() => {
    if (!searchTerm.trim()) return activeData?.items || [];
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeData, allItems]);

  return (
    <div className="relative min-h-screen text-white">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 z-0 bg-slate-950/50" />
      <div className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6 md:flex-row md:gap-6 md:py-10">
        {/* LEFT SIDEBAR / TOP NAVIGATION ON MOBILE */}
        <aside className="mb-6 rounded-2xl border border-white/20 bg-white/10 p-3 shadow-xl backdrop-blur-xl md:sticky md:top-24 md:mb-0 md:h-[calc(100vh-7rem)] md:w-60 md:p-4 md:overflow-y-auto">
          <div className="mb-4">
            <h2 className="hidden text-lg font-semibold text-white md:block md:mb-4">Menu</h2>
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-10 pr-10 text-sm text-white outline-none focus:border-red-500/50 focus:bg-white/10"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <CloseIcon size={14} />
                </button>
              )}
            </div>
          </div>

          <div className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:flex-col md:pb-0 ${searchTerm ? 'opacity-50 pointer-events-none' : ''}`}>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`whitespace-nowrap rounded-xl border px-4 py-2 text-left text-xs font-medium transition md:w-full md:text-sm ${activeCategory === cat.name
                    ? "border-white/20 bg-white text-slate-950"
                    : "border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1 z-1 ">
          {/* CATEGORY HEADER */}
          <header className="mb-6 text-center md:text-left">
            <span className="text-[10px] tracking-[0.2em] text-slate-400 md:text-xs uppercase">
              {searchTerm ? "Search Results" : "Fine Dining Experience"}
            </span>

            <h1 className="mt-1 text-3xl font-bold text-white md:text-4xl">
              {searchTerm ? `Found ${displayItems.length} items` : activeData?.name}
            </h1>

            {!searchTerm && (
              <p className="mt-2 text-sm text-slate-300 md:text-base">
                {activeData?.subtitles}
              </p>
            )}
          </header>

          {/* GRID (2 COLUMNS ON MOBILE) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
            {displayItems.map((item, index) => (
              <MotionDiv
                key={item.id}
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl md:rounded-3xl"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.01 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-32 overflow-hidden sm:h-44">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                  <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-slate-900/70 px-2 py-0.5 text-[10px] font-semibold text-white sm:px-3 sm:py-1 sm:text-xs">
                    {item.currency} {item.price}
                  </span>
                  {searchTerm && (
                    <span className="absolute left-2 top-2 rounded-full border border-white/30 bg-red-500/80 px-2 py-0.5 text-[8px] font-bold text-white uppercase sm:px-3 sm:py-1 sm:text-[10px]">
                      {item.categoryName}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-sm font-semibold text-white sm:text-lg line-clamp-1">{item.name}</h3>
                  <p className="mt-1 text-[10px] text-slate-300 sm:text-sm line-clamp-2">{item.desc}</p>
                  <button
                    onClick={() => onAddToCart?.(item.id)}
                    className="mt-3 w-full rounded-lg border border-white/25 bg-white/10 px-2 py-2 text-[11px] font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    Add to Order
                  </button>
                </div>
              </MotionDiv>
            ))}
          </div>

          {displayItems.length === 0 && (
            <div className="mt-20 text-center">
              <Search className="mx-auto mb-4 opacity-20" size={64} />
              <p className="text-lg text-slate-400">No items found matching "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-red-400 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;