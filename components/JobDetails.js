import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobDetailScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.details}>Location: {job.location}</Text>
      <Text style={styles.details}>Salary: {job.salary}</Text>
      <Text style={styles.details}>Phone: {job.phone}</Text>
      <Text style={styles.details}>Description: {job.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default JobDetailScreen;
