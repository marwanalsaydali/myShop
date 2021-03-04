import { MdLocalGroceryStore } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1``;
function NavBar() {
  return (
    <div className="nav__bar">
      <Link href="/">
        <Logo>
          <MdLocalGroceryStore />
          MyShop
        </Logo>
      </Link>
    </div>
  );
}

export default NavBar;
