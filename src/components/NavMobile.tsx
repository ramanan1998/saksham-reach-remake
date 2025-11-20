
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";


export const NavMobile = ({ routes }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger color="green" toggled={isOpen} size={30} toggle={setOpen} />
        {isOpen && (
          <div
            className="fixed left-0 shadow-4xl right-0 top-[6rem] p-5 pt-0 bg-transparent h-full"
          >
            <ul className="grid gap-2 rounded-3xl bg-primary backdrop-blur-md">
              {routes.map((route: any) => {

                return (
                    <li
                        key={route.name}
                        className="w-full p-[0.08rem] flex items-center justify-center"
                    >
                        <Link
                            onClick={() => setOpen((prev) => !prev)}
                            className="flex items-center justify-between p-5 rounded-xl"
                            to={route.route}
                        >
                            <p className="flex gap-1 text-lg text-white">{route.name}</p>
                        </Link>
                    </li>
                );
              })}

            </ul>
          </div>
        )}
    </div>
  );
};
