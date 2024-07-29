import { useTheme } from "../../context/ThemeContext";
import style from "./search.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export default function Search({ keywords, setKeywords }: Props) {
  const cleanValueHandler = () => {
    setKeywords("");
  };

  const { isDark } = useTheme();

  return (
    <div className={`${style.search} ${isDark ? style.dark : style.light}`}>
      <input
        type='text'
        value={keywords}
        className={style.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder='Javascript'
      ></input>

      <span onClick={cleanValueHandler} className={style.cancel}>
        ✖
      </span>
    </div>
  );
}
