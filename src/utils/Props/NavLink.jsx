const NavLink = (link) => {
  const { name, path } = link;
  return (
    <>
      <li>
        <a href={path} className="text-white">
          {name}
        </a>
      </li>
    </>
  );
};

export default NavLink;
