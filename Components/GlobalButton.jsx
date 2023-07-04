import { TouchableOpacity } from "react-native";

const GlobalButton = ({ onPress, style, children }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {children}
  </TouchableOpacity>
);

export default GlobalButton;
