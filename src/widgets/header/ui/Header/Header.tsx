import { useTheme } from "@/app/providers/ThemeProvider";
import { formatDate } from "@/shared/helpers/formatDate";
import style from "./header.module.css";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";

export default function Header() {
  const { isDark } = useTheme();

  return (
    <header className={`${style.header} ${isDark ? style.dark : style.light}`}>
      <div className={style.info}>
        <h1 className={style.title}>NEWS REACTIFY</h1>
        <p className={style.date}>{formatDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
}
