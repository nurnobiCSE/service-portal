import { useState } from "react";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const NavbarSection = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <div className="bg-[#0b2144] flex flex-col md:flex-row md:gap-7 justify-between items-center px-5 py-4">
      <ul className="flex flex-col md:flex-row gap-8 text-white justify-center items-center">
        <li>
          <input className="w-[140px] md:w-[350px] md:py-1 px-1 text-[#0b2144] border-none rounded-md bg-gray-200" type="text" />
          <button className="ml-3 border-none px-1 md:px-3 md:py-1 rounded-md bg-white text-[#0b2144] md:font-medium hover:bg-slate-300">search</button>
        </li>
        <li className="md:ml-20"><a className="hover:text-[#ffebcd]" href="">Home</a></li>
        <li className="relative group">
          <a className="hover:text-[#ffebcd] flex justify-center items-center" href="#">
            Category
            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <ul className="z-40 hidden absolute left-0 mt-1 space-y-2 w-40 py-2 px-3 bg-[#0b2144] text-[#ffebcd] group-hover:block border border-gray-300 rounded-md shadow-lg">
            <li><a href="">Category 1</a></li>
            <li><a href="">Category 2</a></li>
            <li><a href="">Category 3</a></li>
            <li><a href="">Category 4</a></li>
            <li><a href="">Category 5</a></li>
            <li><a href="">Category 6</a></li>
            <li><a href="">Category 7</a></li>
            <li><a href="">Category 8</a></li>
            <li><a href="">Category 9</a></li>
            <li><a href="">Category 10</a></li>

          </ul>

        </li> <br />

      </ul>
      <div>
        <button className="border-none px-3 py-1 rounded-md bg-white text-[#0b2144] font-medium hover:bg-slate-300" onClick={openLoginModal} >Login</button> &nbsp;
        <button className="border-none px-3 py-1 rounded-md bg-white text-[#0b2144] font-medium hover:bg-slate-300" onClick={openRegisterModal} >Register</button>
      </div>
      {showLoginModal && (
        <LoginModal onClose={closeModals} />
      )}

      {showRegisterModal && (
        <RegisterModal onClose={closeModals} />
      )}
    </div>
  )
}

export default NavbarSection
