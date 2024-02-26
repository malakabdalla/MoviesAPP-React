import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <main>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Shows">Shows</NavLink>
          <NavLink to="/Search">Search</NavLink>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}

export default Header;
