import './style.css'; // Assuming you create a separate CSS file for Toggle component styles

const Toggle = ({ theme, toggleTheme }) => {
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
