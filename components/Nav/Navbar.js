import { MdLocalGroceryStore } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";

const LogoContainer = styled.div`
  margin: 10px auto;
`;

const Logo = styled.div`
  background-color: var(--black);
  color: var(--white);
  padding: 10px;
  font-size: 22px;
  font-weight: bold;
  transform: skew(-7deg);
  display: inline-block;
`;
function NavBar() {
  return (
    <LogoContainer>
      <Link href="/">
        <Logo>
          <MdLocalGroceryStore />
          MyShop
        </Logo>
      </Link>
    </LogoContainer>
  );
}

export default NavBar;
