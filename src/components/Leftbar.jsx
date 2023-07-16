import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import fullLogo from '../images/taskmate.jpg';
import shortLogo from '../images/taskmate (2).jpg';
const Leftbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${
        isCollapsed ? "w-[12vw] bg-slate-200" : "w-[20vw] bg-slate-200"
      } h-[100vh]  relative`} 
    >
      {/* logo  */}
      <div className="h-[14vh]   flex items-center justify-center ">
        {/* this text need to change with logo icon or image */}
        {isCollapsed ? <img src={shortLogo} alt="" /> : <img src={fullLogo} alt="" />  }
      </div>
      {/* main menubar  */}
      <nav className="flex flex-col ">
        <button className="text-xl font-bold  h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white mt-2">Home</button>
        <button className="text-xl font-bold  h-9 hover:bg-slate-400 text-start border-b-1 border-white">Team</button>
        <button className="text-xl font-bold  h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Project Name</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Current Projects</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Pending Projects</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Compleated</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Reports</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Calender</button>
        <button className="text-xl font-bold h-9 hover:bg-slate-400 text-start border-solid border-b-2 border-white">Support</button>
      </nav>

      {/*  expand and collapsed icon for leftsidebar */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 top-[50%] -translate-y-[50%]  bg-gray-400 text-white h-[70px] w-[20px] flex items-center justify-center rounded-tl-md rounded-bl-md "
      >
        <AiOutlineDoubleRight
          className={`${!isCollapsed && "rotate-[180deg]"} transform`}
        />
      </button>
    </div>
  );
};

export default Leftbar;
