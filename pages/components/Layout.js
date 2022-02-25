import Footer from "./pageComponents/footer";
import MainMenu from "./pageComponents/menu";

const Layout = ({ children }) => {
  return (
    <div>
      <MainMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
