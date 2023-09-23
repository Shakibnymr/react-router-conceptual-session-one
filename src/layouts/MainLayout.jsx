import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <section>
          <div className="p-7 shadow-xl">Nav</div>
          <Outlet></Outlet>
        </section>
      );
};

export default MainLayout;