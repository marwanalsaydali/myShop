import { createGlobalStyle } from "styled-components";
import Nav from "./Nav/Nav";

const GlobalStyle = createGlobalStyle`

html{
  --black:#666;
  --white:#fdfdfd;
  --max-width:1000px;
  --bs: 0 10px 14px 0 rgba(0,0,0,09);
}

`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
