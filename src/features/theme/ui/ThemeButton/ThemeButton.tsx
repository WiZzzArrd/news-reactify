import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcons } from "@/shared/assets/index";

export default function ThemeButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.dark : themeIcons.light}
      width={30}
      alt='theme'
      onClick={toggleTheme}
    />
  );
}
