import logo from "../assets/logo.png";

export default function DoggyHeader() {
  return (
    <header className="flex flex-wrap w-full h-fit gap-2 items-center sm:justify-start justify-center">
      <img className="w-64 max-w-80 md:w-80" src={logo} alt="Doggy logo" />
      <div className="flex flex-col gap-4">
        <h1
          className="text-7xl md:text-8xl h-fit font-semibold pb-4 bg-gradient-to-r from-orange-500 to-yellow-400
          bg-clip-text text-transparent"
        >
          doggy
        </h1>
        <p className="text-neutral-300">A dog breeds dictionary with photos</p>
      </div>
    </header>
  );
}
