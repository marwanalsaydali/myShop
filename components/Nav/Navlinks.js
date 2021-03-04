import Link from "next/link";
import styled from "styled-components";

const NavLinkStyle = styled.div``;
function NavLinks() {
  return (
    <NavLinkStyle className="nav__links">
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavLinkStyle>
  );
}

export default NavLinks;
