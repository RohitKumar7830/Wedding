import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="border px-2 py-4">
      <div className="container mx-auto max-w-xl">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            MANE
          </div>
          <div className="flex-grow"></div>
          <div>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
