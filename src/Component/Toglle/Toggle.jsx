import './Toggle.css';

export const Toogle = ({ handleChange, isChecked }) => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={handleChange} checked={isChecked} />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon">🌙</i>
        <i className="fas fa-sun"></i>☀️<span className="ball"></span>
      </label>
    </div>
  );
};
