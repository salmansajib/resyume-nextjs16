import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// function for filter items for the portfolio gallery
export function filterItems(items, activeCategory) {
  if (!activeCategory || activeCategory === "all") return items;
  return items.filter(
    (it) => it.categories && it.categories.includes(activeCategory),
  );
}
