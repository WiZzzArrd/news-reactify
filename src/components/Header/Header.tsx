import style from "./header.module.css";
import { formatDate } from "../../helpers/formatDate";
import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${style.header} ${isDark ? style.dark : style.light}`}>
      <div className={style.info}>
        <h1 className={style.title}>NEWS REACTIFY</h1>
        <p className={style.date}>{formatDate(new Date())}</p>
      </div>

      <div>
        <img
          src={isDark ? themeIcons.dark : themeIcons.light}
          width={30}
          alt='theme'
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}
