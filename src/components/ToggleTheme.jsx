
import { useTheme } from '@/context/ThemeProvider';

const ToggleTheme = () => {
    const { darkMode, toggleTheme } = useTheme();
  return (
    <div className=' md:px-2 '>
        <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="theme-toggle"
          className="sr-only"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner">
        <div className={`absolute w-6 h-6 -top-1 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-full' : ''}`}></div>
        </div>
       
      </div>
      {/* <div className={`ml-3 text-gray-600 dark:text-white`}>{darkMode ? 'Dark Mode' : 'Light Mode'}</div> */}
    </label>
    </div>
  );
};

export default ToggleTheme;

