import profile from '../images/profile.jpg';
import darkMode from '../images/darkmode.png';
import notificationIcon from '../images/notification.jpg';
const Topbar = () => {
  return (
    <div className="min-h-[13vh] bg-red-400">
      <nav className="min-h-[13vh] bg-slate-200 shadow md:flex md:items-center  justify-end ">
        {/* <div>
        <span className="p-7 text-2xl cursor-pointer">Task Mate</span>
      </div> */}
        <div className="md:flex md:items-center md:justify-center mr-5  min-h-[13vh]">
          <span className="min-h-[13vh] hover:bg-slate-400 p-4 md:flex md:items-center md:justify-center rounded">
            <a href="#" className="text-xl hover:text-white duration-500">Notice</a>
          </span>
          <span className="min-h-[13vh] hover:bg-slate-400 p-4 md:flex md:items-center md:justify-center rounded">
            <a href="#" className="text-xl hover:text-white duration-500">Login</a>
          </span>
          <span className="min-h-[13vh] hover:bg-slate-400 p-4 md:flex md:items-center md:justify-center rounded">
            <a href="#" className="text-xl hover:text-white duration-500">Sign Up</a>
          </span>
          <span className="min-h-[13vh]  py-4 px-2 md:flex md:items-center md:justify-center rounded">
            <img src={darkMode} alt="" className='rounded-full w-[25px] cursor-pointer' />
          </span>
          <span className=" min-h-[13vh]  p-4 md:flex md:items-center md:justify-center cursor-pointer">
            <img src={notificationIcon} alt="" className='rounded-full w-[25px]' />
          </span>
          <img src={profile} alt="" className="rounded-full w-[50px] ml-1 cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;