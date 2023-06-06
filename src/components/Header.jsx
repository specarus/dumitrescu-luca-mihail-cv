const Header = () => {
  return (
    <header className="w-full h-auto p-2 bg-primary text-neutral-700">
      <div className="mobile:w-[98%] tablet:w-[90%] laptop:w-[85%] h-full bg-white mx-auto mobile:p-2 tablet:p-3 laptop:p-4 rounded-full flex items-center">
        <img
          src="/images/placeholder.jpg"
          alt="Profile"
          className="mobile:w-20 mobile:h-20 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 rounded-full select-none"
        />
        <div className="text-center grow">
          <h1 className="uppercase mobile:text-sm tablet:text-2xl laptop:text-3xl font-semibold">
            Dumitrescu Luca-Mihail
          </h1>
          <p className="italic mobile:text-2xs tablet:text-sm laptop:text-md text-gray-500">
            Undergraduate <span className="not-italic">|</span> Web Developer
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
