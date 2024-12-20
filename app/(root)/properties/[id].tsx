import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const PropertyDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>PropertyDetails {id}</Text>
    </View>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({});