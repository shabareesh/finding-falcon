import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'vehicles',
  initialState: {
    data: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchVehiclesStart: (state) => {
      state.isLoading = true;
    },
    fetchVehiclesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchVehiclesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesError,
} = slice.actions;

export const fetchVehicles = () => (dispatch) => {
  dispatch(fetchVehiclesStart);
  fetch('https://findfalcone.herokuapp.com/vehicles')
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(res => dispatch(fetchVehiclesSuccess(res)))
    .catch(error => dispatch(fetchVehiclesError(error)));
};

export const vehiclesState = state => state.vehicles;

export default slice.reducer;
