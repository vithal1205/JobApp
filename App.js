import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { bookmarkJob } from "./redux/jobsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = await AsyncStorage.getItem("bookmarks");
      if (storedBookmarks) {
        const bookmarks = JSON.parse(storedBookmarks);
        bookmarks.forEach((job) => dispatch(bookmarkJob(job)));
      }
    };

    loadBookmarks();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
