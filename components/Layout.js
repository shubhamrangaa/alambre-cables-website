const { default: CustomNavBar } = require("./CustomNavBar");
const { default: Footer } = require("./footer");

const Layout = ({ children }) => {
  return (
    <>
      <CustomNavBar />
      <main>{children}</main>
      <Footer />{" "}
    </>
  );
};

export default Layout;
