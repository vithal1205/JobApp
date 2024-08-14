import React from "react";
import { FlatList } from "react-native";
import JobCard from "./JobCard";

const JobList = ({ jobs, onPressJob, onBookmarkJob }) => {
  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <JobCard
          job={item}
          onPress={() => onPressJob(item)}
          onBookmark={() => onBookmarkJob(item)}
        />
      )}
    />
  );
};

export default JobList;
