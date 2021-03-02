import Link from "next/link";
function NavLinks() {
  return (
    <div className="nav__links">
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </div>
  );
}

export default NavLinks;
