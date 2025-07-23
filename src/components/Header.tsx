import logoImg from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const navItems = ["Features", "Team", "Sign In"];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link to="/">
          <img src={logoImg} alt="Fylo logo" className="w-28 md:w-auto" />
        </Link>
      </div>
      <ul className="text-white flex gap-5 md:gap-20 text-base font-semibold ">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to="#"
              className="hover:underline opacity-80 hover:opacity-100 transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
