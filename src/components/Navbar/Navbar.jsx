// import React from "react";
// import { Link } from "react-router";
// import { useAuth } from "../../context/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = useAuth();

//   const handleLogOutUser = async () => {
//     try{
//       await signOutUser()
//     }catch(error){
//       console.log("LogOut Faild")
//     }
//   } 

//   return (
//     <nav className="fixed top-0 right-0 w-full z-50 bg-white shadow-lg">
//       <div className="navbar max-w-screen-2xl container mx-auto bg--white">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/services">Services</Link>
//               </li>
//               <li>
//                 <Link to="/blogs">Blogs</Link>
//               </li>
//               <li>
//                 <details>
//                   <summary>Categories</summary>
//                   <ul className="p-2">
//                     <li>
//                       <Link to="/">Web Desing</Link>
//                     </li>
//                     <li>
//                       <Link to="/">App Development</Link>
//                     </li>
//                     <li>
//                       <Link to="/">UI/UX Desin</Link>
//                     </li>
//                     <li>
//                       <Link to="/">Digital Markenting</Link>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//             </ul>
//           </div>
//           <Link to="/" className="text-2xl font-bold flex items-center gap-2 ">
//             <img src="/logo.png" alt="" />
//             <span className="text-[#697077] hidden sm:block ">Web Code</span>
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/blogs">Blogs</Link>
//             </li>
//             <li>
//               <details>
//                 <summary>Categories</summary>
//                 <ul className="p-2 z-50">
//                   <li>
//                     <Link to="/">Web Desing</Link>
//                   </li>
//                   <li>
//                     <Link to="/">App Development</Link>
//                   </li>
//                   <li>
//                     <Link to="/">UI/UX Desin</Link>
//                   </li>
//                   <li>
//                     <Link to="/">Digital Markenting</Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end space-x-4">
//           {user ? (
//             <>
//               <Link
//                 to="/dashboard"
//                 className="btn btn-outline btn-primary px-8 hidden sm:flex"
//               >
//                 Dashboard
//               </Link>
//               <button
//                 onClick={handleLogOutUser}
//                 className="btn  btn-primary bg-primary text-white"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="btn btn-outline btn-primary  hidden sm:flex"
//               >
//                 LogIn
//               </Link>
//               <Link to="/pricing" className="btn btn-primary bg-primary">
//                 Start Free Trial
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOutUser = async () => {
    try {
      await signOutUser();
    } catch {
      console.error("Logout Failed");
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 w-full shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar max-w-screen-xl mx-auto px-4">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img src="/logo.png" alt="Logo" />
            <span className="text-gray-600 hidden sm:block">Web Code</span>
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-50">
                  <li>
                    <Link to="/">Web Design</Link>
                  </li>
                  <li>
                    <Link to="/">App Development</Link>
                  </li>
                  <li>
                    <Link to="/">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="btn btn-outline btn-primary hidden sm:flex"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogOutUser}
                className="btn btn-primary bg-primary text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-primary hidden sm:flex"
              >
                LogIn
              </Link>
              <Link to="/pricing" className="btn btn-primary bg-primary">
                Start Free Trial
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
