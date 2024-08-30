const NavLink = (link) => {
  const { name, path } = link;
  return (
    <>
      <li>
        <a href={path} className="text-white hover:text-purple-300">
          {name}
        </a>
      </li>
    </>
  );
};

export default NavLink;
