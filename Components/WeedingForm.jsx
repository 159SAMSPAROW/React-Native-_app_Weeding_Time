import React, { useState } from "react";
import { View, Text, TextInput, Button, ImageBackground } from "react-native";
import { weedingForm } from "../Style/weedingForm";
import Icon from "react-native-vector-icons/FontAwesome";
import StarIcon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const WeedingForm = () => {
  const [WeedingName, setWeedingName] = useState("");
  const [address, setAddress] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [weddingDate, setWeddingDate] = useState(new Date());

  const handleFormSubmit = () => {

    console.log("WeedingName:", WeedingName);
    console.log("Address:", address);
    console.log("Guest Count:", guestCount);
    console.log("Wedding Date:", weddingDate);
  };

  return (
    <ImageBackground source={require("../assets/Images/water_color_bg.jpg")}>
      <View style={weedingForm.formSection}>
        <View style={weedingForm.container}>
          <View style={weedingForm.inputContainer}>
            <View style={weedingForm.topBorder}></View>
            <Text style={weedingForm.label}>Weeding Name</Text>
            <TextInput
              style={weedingForm.input}
              value={WeedingName}
              onChangeText={setWeedingName}
            />
          </View>

          <View style={weedingForm.inputContainer}>
            <View style={weedingForm.topBorder}></View>
            <Text style={weedingForm.label}>Location</Text>
            <TextInput
              style={weedingForm.input}
              value={address}
              onChangeText={setAddress}
            />
            <Icon name="search" size={20} style={weedingForm.searchIcon} />
          </View>

          <View style={weedingForm.inputContainer2}>
            <Text style={weedingForm.label2}>Guest Count</Text>
            <TextInput
              style={weedingForm.input2}
              value={guestCount}
              onChangeText={setGuestCount}
              keyboardType="numeric"
            />
          </View>

          <View style={weedingForm.inputContainer2}>
            <Text style={weedingForm.label2}>Date</Text>
            <View style={weedingForm.inputDateContainer}>
              <DateTimePicker
                value={weddingDate}
                mode="date"
                display="default"
                onChange={(event, date) => setWeddingDate(date || weddingDate)}
                format="YYYY-MM-DD"
              />
              <Icon
                name="calendar"
                size={24}
                color="#6750A4"
                style={weedingForm.calendarIcon}
              />
            </View>
          </View>
          <Button title="Submit" onPress={handleFormSubmit} />
        </View>
        <View style={weedingForm.starsContainer}>
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
        </View>
        <View style={weedingForm.divider}></View>
        <Text style={weedingForm.text}>You can choose multiple options per dish, and we will take care of gathering the choices from each of your guests to ensure everyone's satisfaction</Text>
        <View style={weedingForm.divider}></View>
        <View style={weedingForm.starsContainer}>
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WeedingForm;
