import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from './favCitiesReducer'
import weatherReducer from "./weatherReducer";
export const store = configureStore({
  reducer: {
    favoritesCities: citiesReducer,
    weatherData:weatherReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
