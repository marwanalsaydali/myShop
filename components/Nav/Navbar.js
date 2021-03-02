import Link from "next/link";
function NavBar() {
  return (
    <div className="nav__bar">
      <Link href="/">My Shop</Link>
      <p>Search</p>
    </div>
  );
}

export default NavBar;
