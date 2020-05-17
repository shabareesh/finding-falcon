import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'plantes',
  initialState: {
    data: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    fetchPlanetsStart: (state) => {
      state.isLoading = true;
    },
    fetchPlanetsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchPlanetsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPlanetsStart,
  fetchPlanetsSuccess,
  fetchPlanetsError,
} = slice.actions;

export const fetchPlanets = () => (dispatch) => {
  dispatch(fetchPlanetsStart());
  fetch('https://findfalcone.herokuapp.com/planets')
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(res => dispatch(fetchPlanetsSuccess(res)))
    .catch(error => dispatch(fetchPlanetsError(error)));
};

export const planetsState = state => state.planets;

export default slice.reducer;
