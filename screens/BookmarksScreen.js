import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import JobList from "../components/JobList";

const BookmarksScreen = () => {
  const { bookmarks } = useSelector((state) => state.jobs);

  if (!bookmarks.length) {
    return (
      <View style={styles.centered}>
        <Text>No bookmarks available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <JobList jobs={bookmarks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookmarksScreen;
