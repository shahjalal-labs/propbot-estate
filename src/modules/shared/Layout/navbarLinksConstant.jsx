// navbarLinks.jsx
import { NavLink } from "react-router";
import {
  Home,
  ShoppingBag,
  Key,
  BadgeDollarSign,
  Info,
  Phone,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="w-4 h-4" />,
    emoji: "🏠",
  },
  {
    name: "Buy",
    path: "/buy",
    icon: <ShoppingBag className="w-4 h-4" />,
    emoji: "🛒",
  },
  {
    name: "Rent",
    path: "/rent",
    icon: <Key className="w-4 h-4" />,
    emoji: "🔑",
  },
  {
    name: "Sell",
    path: "/sell",
    icon: <BadgeDollarSign className="w-4 h-4" />,
    emoji: "💰",
  },
  {
    name: "About Us",
    path: "/about-us",
    icon: <Info className="w-4 h-4" />,
    emoji: "ℹ️",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    icon: <Phone className="w-4 h-4" />,
    emoji: "📞",
  },
];

// 👉 for mobile/drawer: use emoji
export const mobileNavLinks = () =>
  navItems.map((item) => (
    <li key={item.path}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md transition-all border border-transparent
          ${
            isActive
              ? "bg-white/10 backdrop-blur-sm border-cyan-500 text-[#00FF9C] font-bold shadow-lg scale-[1.03]"
              : "hover:bg-white/10 hover:backdrop-blur-sm hover:border-cyan-500 text-slate-300"
          }`
        }
      >
        <span className="text-base">{item.emoji}</span>
        <span className="text-sm">{item.name}</span>
      </NavLink>
    </li>
  ));

// 👉 for desktop: use icon (NO emoji)
export const desktopNavLinks = () =>
  navItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition-all border border-transparent
        ${
          isActive
            ? "text-[#00FF9C] font-semibold border-cyan-500 bg-white/10 backdrop-blur-sm shadow"
            : "text-slate-300 hover:text-[#00FF9C] hover:border-cyan-500 hover:bg-white/10 hover:backdrop-blur-sm"
        }`
      }
    >
      {item.icon}
      <span className="text-sm">{item.name}</span>
    </NavLink>
  ));
