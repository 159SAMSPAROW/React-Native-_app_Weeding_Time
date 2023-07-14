import React, { useContext } from "react";
import { View, Text, TextInput, Button, ImageBackground, Alert } from "react-native";

import WeedingFormContext from "../Context/WeedingFormContext";
import WeedingMealRecapContext from "../Context/WeedingMealRecapContext";
import QuoteContext from "../Context/QuoteContext";

import GlobalButton from "../Components/GlobalButton";
import { globalButton } from "../Style/button";

import { weedingForm } from "../Style/weedingForm";
import Icon from "react-native-vector-icons/FontAwesome";
import StarIcon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useNavigation } from "@react-navigation/native";

const WeedingForm = () => {
  const { weedingFormState, setWeedingFormState } =
    useContext(WeedingFormContext);

  const { selectedOptions } = useContext(WeedingMealRecapContext);

 // const { quoteData, setQuoteData } = useContext(QuoteContext);

  const navigation = useNavigation();

  const handleButtonClick = () => {
    // Récupére les données du formulaire et les items sélectionnés
    const formData = weedingFormState;
    const selectedItems = selectedOptions;

    // Si tout les champs sont bien remplis
    if (
      !formData.WeedingName ||
      !formData.address ||
      !formData.guestCount ||
      !formData.weddingDate
    ) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }

    // Si la date est superieur d' un mois
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
    if (formData.weddingDate < oneMonthFromNow) {
      Alert.alert(
        "Error",
        "The wedding date should be at least one month from now."
      );
      return;
    }

    // Met à jour les données du devis
    //setQuoteData({ formData, selectedItems });
    //console.log(formData, selectedItems);
    navigation.navigate("Quote");
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
              value={weedingFormState.WeedingName}
              onChangeText={(text) =>
                setWeedingFormState({ ...weedingFormState, WeedingName: text })
              }
            />
          </View>

          <View style={weedingForm.inputContainer}>
            <View style={weedingForm.topBorder}></View>
            <Text style={weedingForm.label}>Location</Text>
            <TextInput
              style={weedingForm.input}
              value={weedingFormState.address}
              onChangeText={(text) =>
                setWeedingFormState({ ...weedingFormState, address: text })
              }
            />
            <Icon name="search" size={20} style={weedingForm.searchIcon} />
          </View>

          <View style={weedingForm.inputContainer2}>
            <Text style={weedingForm.label2}>Guest Count</Text>
            <TextInput
              style={weedingForm.input2}
              value={weedingFormState.guestCount}
              onChangeText={(text) =>
                setWeedingFormState({ ...weedingFormState, guestCount: text })
              }
              keyboardType="numeric"
            />
          </View>

          <View style={weedingForm.inputContainer2}>
            <Text style={weedingForm.label2}>Date</Text>
            <View style={weedingForm.inputDateContainer}>
              <DateTimePicker
                value={weedingFormState.weddingDate}
                mode="date"
                display="default"
                onChange={(event, date) =>
                  setWeedingFormState({
                    ...weedingFormState,
                    weddingDate: date || weedingFormState.weddingDate,
                  })
                }
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
        </View>
        <View style={weedingForm.starsContainer}>
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
        </View>
        <View style={weedingForm.divider}></View>
        <Text style={weedingForm.text}>
          You can choose multiple options per dish, and we will take care of
          gathering the choices from each of your guests to ensure everyone's
          satisfaction
        </Text>
        <View style={weedingForm.divider}></View>
        <View style={weedingForm.starsContainer}>
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
          <StarIcon name="star-border" style={weedingForm.stars} />
        </View>
        <GlobalButton
          style={[globalButton.button, weedingForm.submitButton]}
          title="Send"
          onPress={handleButtonClick}
        >
          <View>
            <Text style={weedingForm.submitButtonText}>Send</Text>
          </View>
        </GlobalButton>
      </View>
    </ImageBackground>
  );
};

export default WeedingForm;
