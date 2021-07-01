import classes from "./Header.module.css";
import images from '../images.png';

function Header() {
  return (
    <div className={classes.header}>
      <a className={classes.logo}>
        My First Demo Project
      </a>
      
    </div>
  );
}

export default Header;
