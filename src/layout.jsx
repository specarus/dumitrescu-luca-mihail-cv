import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen mobile:py-10 tablet:py-14 laptop:py-16 overflow-hidden -z-40">
      <div className="mx-auto mobile:w-[95vw] laptop:w-[80vw] desktop:w-[55vw] relative shadow-xl h-full border z-0">
        <div className="absolute w-full mobile:top-10 left-0">
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
