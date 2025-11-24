import React from "react";
import CategoryIcon from "./CategoryIcon";

export default function CategoryFilter({
  categoryData,
  activeCategory,
  onCategorySelect,
}) {
  return (
    <div className="flex lg:flex-col items-center justify-center gap-5 flex-wrap">
      {categoryData.map((category) => {
        const isActive = category.name === activeCategory;

        return (
          <button
            className={`w-64 h-16 pl-5 border  flex items-center gap-5 cursor-pointer ${
              isActive
                ? "border-primary bg-primary text-background-primary"
                : "border-border-primary"
            }`}
            key={category.id}
            onClick={() => onCategorySelect(category.name)}
          >
            <div
              className={`size-9 border rounded-full flex items-center justify-center ${
                isActive ? "border-background-primary" : "border-text-dimmed"
              }`}
            >
              <CategoryIcon
                name={category.name}
                className={`size-4  ${
                  isActive ? "text-background-primary" : "text-text-dimmed"
                }`}
              />
            </div>
            <p
              className={`text-xl font-medium ${
                isActive ? "text-background-primary" : "text-text-secondary"
              }`}
            >
              {category.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}
