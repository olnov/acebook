import './style.css';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle = ({ theme, toggleTheme }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="mt-auto p-4">
      <label className="ui-switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
