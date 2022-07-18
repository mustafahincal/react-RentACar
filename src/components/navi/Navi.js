import React from "react";

function Navi() {
  return (
    <div>
      <nav className="flex justify-between py-5 px-12 bg-darkBlue text-white font-bold">
        <div className="logo  w-1/3 text-3xl">Logo</div>
        <div className="menu  w-1/3 text-xl">
          <ul className="flex justify-between">
            <li>getir</li>
            <li>götür</li>
            <li>haydi</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navi;