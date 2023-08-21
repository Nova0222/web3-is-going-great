import { useEffect, useRef, useState } from "react";
import { NAVIGATION } from "../../constants/navigation";
import NavigationLink from "./NavigationLink";

export default function MobileNavigation() {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const outsideClickHandler = (evt) => {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [menuRef]);

  if (!isOpen) {
    return (
      <button
        className="mobile-navigation-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          viewBox="0 0 100 80"
          width="25"
          height="25"
          className="hamburger-icon"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
    );
  } else {
    return (
      <nav className="mobile-navigation-menu" ref={menuRef}>
        <button
          className="mobile-navigation-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-close" />
        </button>
        <ul>
          {NAVIGATION.map((navItem) => {
            if (Object.prototype.hasOwnProperty.call(navItem, "children")) {
              return (
                <li key={navItem.key}>
                  <h4>{navItem.label}</h4>
                  <ul>
                    {navItem.children.map((child) => (
                      <li key={child.path || child.href}>
                        <NavigationLink {...child} />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={navItem.path || navItem.href}>
                <NavigationLink {...navItem} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
