export default function DoggyFooter() {
  return (
    <footer className="text-neutral-500 w-full">
      <p>
        Logo and favicon by
        <a
          className="ml-1 hover:text-amber-500 transition-all duration-300"
          href="https://www.flaticon.com/free-icons/pet-grooming"
          title="pet grooming icons"
        >
          Free Icons
        </a>
      </p>
      <p>
        Breeds and photos by
        <a
          className="ml-1 hover:text-amber-500 transition-all duration-300"
          href="https://dog.ceo/dog-api"
          title="dog api"
        >
          Dog API
        </a>
      </p>
      <p className="text-center">
        © 2025
        <a
          className="ml-1 hover:text-amber-500 transition-all duration-300 font-normal"
          href="https://github.com/IciIcifur"
          title="IciIcifur on GitHub"
        >
          Doggy
        </a>
        . Все права защищены.
      </p>
    </footer>
  );
}
