import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import planetsReducer from '../slices/planets.slice';
import vehiclesReducer from '../slices/vehicles.slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    planets: planetsReducer,
    vehicles: vehiclesReducer,
  },
});
