import NavBar from "./Navbar";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const NavStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
function Nav() {
  return (
    <nav>
      <NavStyle>
        <NavBar />
        <NavLinks />
      </NavStyle>
    </nav>
  );
}

export default Nav;
