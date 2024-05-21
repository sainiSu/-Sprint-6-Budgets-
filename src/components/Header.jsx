const Header = () => {
  return (
      <div className="relative w-full h-72 bg-cover bg-center rounded-lg overflow-hidden">
          <img
              src=".\src\assets\header1.png"
              alt="Header background"
              className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-5">
              <h1 className="text-black font-bold text-3xl md:text-5xl p-4 my-4">
                  Aconsegueix la millor qualitat
              </h1>
          </div>
      </div>
  );
};

export default Header;
