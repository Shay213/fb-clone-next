import React from "react";
import Category from "./Category";

enum CATEGORIES {
  INBOX = "inbox",
  COMMUNITES = "communities",
}

const Categories = () => {
  return (
    <div className="flex gap-2">
      {Object.values(CATEGORIES).map((c) => (
        <Category key={c} label={c} active={CATEGORIES.INBOX} />
      ))}
    </div>
  );
};

export default Categories;
