import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";

const Footer = () => {
  const handleEmail = () => {
    Linking.openURL("mailto:test@example.com?subject=Test Mail&body=Test Body");
  };

  return (
    <View>
      <TouchableOpacity onPress={handleEmail}>
        <Text>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
