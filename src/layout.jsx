import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen mobile:py-10 tablet:py-14 laptop:py-16 relative overflow-hidden bg-gray-400 -z-40">
      <div className="mx-auto mobile:w-[95vw] laptop:w-[80vw] desktop:w-[55vw] relative shadow-xl h-full z-0">
        <div className="absolute w-full mobile:top-10 left-0">
          <Header />
        </div>
        <div>{children}</div>
      </div>
      <div className="fixed mobile:-top-[10rem] mobile:-left-[10rem] tablet:-left-[25rem] tablet:-top-[25rem] laptop:-left-[50rem] laptop:-top-[50rem] mobile:w-[20rem] mobile:h-[20rem] tablet:w-[50rem] laptop:w-[90rem] laptop:h-[100rem] tablet:h-[50rem] bg-gray-700 rounded-full -z-30">
        <div className="fixed mobile:-top-[8rem] mobile:-left-[8rem] tablet:-left-[20rem] tablet:-top-[20rem] laptop:-left-[40rem] laptop:-top-[40rem] mobile:w-[16rem] mobile:h-[16rem] tablet:w-[40rem] tablet:h-[40rem] laptop:w-[70rem] laptop:h-[80rem] bg-gray-600 rounded-full -z-30">
          <div className="fixed mobile:-top-[6rem] mobile:-left-[6rem] tablet:-left-[15rem] tablet:-top-[15rem] laptop:-left-[30rem] laptop:-top-[30rem] mobile:w-[12rem] mobile:h-[12rem] tablet:w-[30rem] tablet:h-[30rem] laptop:w-[50rem] laptop:h-[60rem] bg-gray-500 rounded-full -z-30"></div>
        </div>
      </div>
      <div className="fixed mobile:-bottom-[10rem] mobile:-right-[10rem] tablet:-right-[25rem] tablet:-bottom-[25rem] laptop:-right-[50rem] laptop:-bottom-[50rem] mobile:w-[20rem] mobile:h-[20rem] tablet:w-[50rem] laptop:w-[90rem] laptop:h-[100rem] tablet:h-[50rem] bg-gray-700 rounded-full -z-30">
        <div className="fixed mobile:-bottom-[8rem] mobile:-right-[8rem] tablet:-bottom-[20rem] tablet:-right-[20rem] laptop:-right-[40rem] laptop:-bottom-[40rem] mobile:w-[16rem] mobile:h-[16rem] tablet:w-[40rem] tablet:h-[40rem] laptop:w-[70rem] laptop:h-[80rem] bg-gray-600 rounded-full -z-30">
          <div className="fixed mobile:-bottom-[6rem] mobile:-right-[6rem] tablet:-right-[15rem] tablet:-bottom-[15rem] laptop:-right-[30rem] laptop:-bottom-[30rem] mobile:w-[12rem] mobile:h-[12rem] tablet:w-[30rem] tablet:h-[30rem] laptop:w-[50rem] laptop:h-[60rem] bg-gray-500 rounded-full -z-30"></div>
        </div>
      </div>
      <div className="absolute laptop:w-[40rem] laptop:h-[10rem] laptop:-top-[1rem] laptop:right-[20rem] bg-gray-700 rounded-b-full -z-30">
        <div className="absolute laptop:w-[30rem] laptop:h-[8rem] laptop:-top-[1rem] laptop:right-[5rem] bg-gray-600 rounded-b-full -z-30"></div>
      </div>
      <div className="absolute laptop:w-[40rem] laptop:h-[10rem] laptop:-bottom-[1rem] laptop:left-[20rem] bg-gray-700 rounded-t-full -z-30">
        <div className="absolute laptop:w-[30rem] laptop:h-[8rem] laptop:-bottom-[1rem] laptop:left-[5rem] bg-gray-600 rounded-t-full -z-30"></div>
      </div>
    </div>
  );
};

export default Layout;
