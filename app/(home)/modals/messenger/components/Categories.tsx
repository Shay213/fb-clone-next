import React from "react";
import Category from "./Category";

const CATEGORIES = ["inbox", "communities"];

const Categories = () => {
  return (
    <div className="flex gap-2">
      {CATEGORIES.map((c) => (
        <Category key={c} label={c} />
      ))}
    </div>
  );
};

export default Categories;
