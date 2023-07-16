import Content from "./Content";
import Leftbar from "./Leftbar";
import Topbar from "./Topbar";

const Main = () => {
  return (
    <main className="min-h-[100vh] max-h-[100vh] min-w-[100vw] max-w-[100vw] overflow-hidden flex ">
      <Leftbar />
      <div className="grow flex flex-col">
        <Topbar />
        <Content />
      </div>
    </main>
  );
};

export default Main;
