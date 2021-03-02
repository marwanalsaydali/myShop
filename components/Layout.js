import Nav from "./Nav/Nav";
function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
