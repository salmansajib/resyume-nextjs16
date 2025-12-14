import { useState } from "react";

export default function useMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen, setIsMenuOpen, handleMenuClick };
}
