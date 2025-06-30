import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { IconContainer } from "../../components/iconContainer";

export default function WhatsappStatus() {
  return (
    <View>
      <View style={styles.header}>
        <IconContainer
          icon={
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={35}
              color="black"
            />
          }
        />
        <Text style={styles.headerText}>Updates</Text>

        <View style={styles.statusListing}>
          <View style={styles.statusListingHeading}>
            <Text style={styles.headerSubText}>Status</Text>
            <View style={styles.headerSubIconContainer}>
              <IconContainer
                icon={<Entypo name="camera" size={24} color="black" />}
              />
              <IconContainer
                icon={<Ionicons name="pencil" size={24} color="black" />}
              />
            </View>
          </View>

          {/* list banani h is ma */}
        </View>
      </View>
    </View>
  );
}
