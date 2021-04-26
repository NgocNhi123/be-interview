import "./Text.css";
import Colors from "../../assets/colors/Colors";
import "../../assets/fonts/Fonts.css";

const Text = ({
  children,
  fontWeight,
  textDecoration,
  fontSize,
  color,
  fontFamily,
  textTransform,
}) => {
  return (
    <span
      style={{
        fontWeight: fontWeight,
        textDecoration: textDecoration,
        fontSize: fontSize,
        color: Colors[color] || color,
        fontFamily: fontFamily,
        textTransform: textTransform,
      }}
      className="defaultStyle"
    >
      {children}
    </span>
  );
};

export default Text;
