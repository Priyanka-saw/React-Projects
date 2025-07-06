const Navbar = () => {
  return (

    <nav className="nav-link container flex justify-between items-center">
      <div className="logo ">
        <img src="\src\assets\hand-icon.png" alt="" />
      </div>

      <ul className="flex gap-5">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="bg-red-500">Login</button>
    </nav>
    
  );
};

export default Navbar;
