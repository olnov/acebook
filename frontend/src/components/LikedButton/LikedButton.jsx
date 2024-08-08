import PropTypes from "prop-types";
import { IconOutlinedAction } from "../IconOutlinedAction";
import "./style.css";

export const LikedButton = ({
  className,
  iconOutlinedActionSubtract = "https://c.animaapp.com/CwAkVolA/img/subtract.svg",
}) => {
  return (
    <div className={`liked-button ${className}`}>
      <IconOutlinedAction
        className="icon-outlined-action-thumb-thumb-up-filled"
        subtract={iconOutlinedActionSubtract}
        subtractClassName="icon-outlined-action-instance"
      />
    </div>
  );
};

LikedButton.propTypes = {
  iconOutlinedActionSubtract: PropTypes.string,
};
