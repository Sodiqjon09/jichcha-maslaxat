import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { navbarDataText } from "../../utils/navbarData";

export default function NavbarMain() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0">
      <div className="px-[60px] flex justify-between items-center mx-auto p-4">
        <div className="cursor-pointer flex items-center gap-[12px] rtl:space-x-reverse">
          <img
            src={logoImg}
            className="h-[55px] rounded-[100%]"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold dark:text-white">
            jichcha maslaxat
          </span>
        </div>
        <div className="flex items-center gap-[40px]">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarDataText.map((el) => (
              <li key={el.id}>
                <Link
                  to={el.link}
                  className="transition-all text-[20px] font-[500] cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to='/page/LoginPage' className="flex justify-center items-center py-2 px-4 w-[120px] bg-blue-500 focus:bg-blue-700 text-white font-bold rounded shadow-md hover:shadow-lg transition duration-300">
            sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
