import { useDarkMode } from '@/context/DarkModeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center text-xl text-yellow-500 rounded-full outline-none'
    >
      {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
