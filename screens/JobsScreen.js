import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs, bookmarkJob } from "../redux/jobsSlice";
import JobList from "../components/JobList";

const JobsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handlePressJob = (job) => {
    navigation.navigate("JobDetail", { job });
  };

  const handleBookmarkJob = (job) => {
    dispatch(bookmarkJob(job));
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error fetching jobs: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <JobList
        jobs={jobs}
        onPressJob={handlePressJob}
        onBookmarkJob={handleBookmarkJob}
      />
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

export default JobsScreen;
