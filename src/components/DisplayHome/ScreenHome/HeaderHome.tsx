import React from "react";
import { useRouter } from "next/router";
import { FaHistory } from "react-icons/fa";

const HeaderHome = () => {
  const router = useRouter();

  const handleHistoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/DataUser");
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  const isDataUserPage = router.pathname === "/DataUser"; 

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-8 bg-white shadow-lg">
      <span
        className="text-3xl sm:text-4xl cursor-pointer font-bold text-[hsl(var(--primary))]"
        onClick={handleHomeClick}
      >
        Connecter Pay
      </span>
      {!isDataUserPage && (
        <div
          className="flex items-center space-x-3 cursor-pointer p-2 transition-all ease-in-out duration-300 group"
          onClick={handleHistoryClick}
        >
          <FaHistory className="text-2xl group-hover:text-[hsl(var(--primary))] transition-colors duration-300" />
          <span className="text-base sm:text-lg font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
            Histórico
          </span>
        </div>
      )}
    </div>
  );
};

export default HeaderHome;
