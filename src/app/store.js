import { configureStore } from '@reduxjs/toolkit';

import HomeSlice from '../features/home/HomeSlice';

export default configureStore({
  reducer: {
    usersData: HomeSlice,
  },
});
