import { View, Text, TouchableOpacity, Linking } from "react-native";
import { footer } from "../Style/footer";
import GlobalButton from "./GlobalButton";
import { smallButton } from "../Style/button";
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialMediaIcon = ({name, url}) => {
  const handlePress = () => {
      Linking.openURL(url);
  };

  return (
      <TouchableOpacity style={footer.socialIcon} onPress={handlePress}>
          <Icon name={name} size={60}  color="#FFFFFF" />
      </TouchableOpacity>
  );
}

const Footer = () => {
  const handleEmail = () => {
    Linking.openURL("mailto:test@example.com?subject=Test Mail&body=Test Body");
  };

  return (
    <View style={footer.footerSection}>
      <TouchableOpacity onPress={handleEmail}>
        <Text style={footer.footerLink}>Contact us</Text>
        <Text style={footer.footerLink}>Weeding.time@gmail.com</Text>
      </TouchableOpacity>

      <GlobalButton
        style={smallButton.button}
        title="Click"
        onPress={() => {
          console.log("Button pressed");
        }}
      ><Text style={smallButton.text}>GTC</Text>
      </GlobalButton>

      <View style={footer.socialIconContainer}>
        <SocialMediaIcon style={footer.socialIcon}  name="facebook" url="https://www.facebook.com" />
        <SocialMediaIcon style={footer.socialIcon} name="snapchat" url="https://www.snapchat.com"  />
        <SocialMediaIcon style={footer.socialIcon}  name="instagram" url="https://www.instagram.com" />
      </View>
    </View>
  );
};

export default Footer;
