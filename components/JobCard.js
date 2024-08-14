import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const JobCard = ({ job, onPress, onBookmark }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.details}>{job.location}</Text>
        <Text style={styles.details}>Salary: {job.salary}</Text>
        <Text style={styles.details}>Phone: {job.phone}</Text>
      </View>
      <TouchableOpacity onPress={onBookmark}>
        <Text style={styles.bookmark}>Bookmark</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    marginVertical: 2,
  },
  bookmark: {
    color: "#007bff",
    marginTop: 10,
  },
});

export default JobCard;
