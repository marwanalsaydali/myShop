import Link from "next/link";
import styled from "styled-components";

const NavLinkStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px black solid;
  a {
    margin: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--black);
    transform: skew(-7deg);
    text-decoration: none;
  }
`;
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
