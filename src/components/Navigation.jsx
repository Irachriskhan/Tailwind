import listofmodules from "../assets/listofmodules";
import NavLink from "../utils/Props/NavLink";

const Navigation = () => {
  return (
    <>
      <ul className="flex gap-3 p-8 bg-gray-500 justify-center">
        {listofmodules.map((link) => {
          return <NavLink key={link.id} {...link} />;
        })}
      </ul>
    </>
  );
};

export default Navigation;
