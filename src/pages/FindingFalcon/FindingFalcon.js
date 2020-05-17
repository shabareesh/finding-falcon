import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PageHeader from '../../components/PageHeader/PageHeader';
import SubHeader from '../../components/SubHeader/SubHeader';
import { fetchPlanets, planetsState } from '../../slices/planets.slice';
import { fetchVehicles, vehiclesState } from '../../slices/vehicles.slice';
import Spinner from '../../components/Spinner/Spinner';

import './findingFalcon.scss';
import Destination from '../../components/Destination/Destination';

const FindingFalcon = () => {
  const dispatch = useDispatch();

  const { data: planets, isLoading } = useSelector(planetsState);
  const { data: vehicles } = useSelector(vehiclesState);

  useEffect(() => {
    dispatch(fetchPlanets());
    dispatch(fetchVehicles());
  }, [dispatch, fetchPlanets, fetchVehicles]);

  const destinationList = [
    {
      name: 'Destination 1',
      selectedPlanet: '',
      selectedVehicle: '',
    },
    {
      name: 'Destination 2',
      selectedPlanet: '',
      selectedVehicle: '',
    },
    {
      name: 'Destination 3',
      selectedPlanet: '',
      selectedVehicle: '',
    },
    {
      name: 'Destination 4',
      selectedPlanet: '',
      selectedVehicle: '',
    },
  ];

  const [destinations, setDestinations] = useState(destinationList);

  const handleDestinationChange = (selectedValue, index) => {
    const newDestinations = destinations.slice();
    newDestinations[index].selectedPlanet = selectedValue;
    setDestinations(newDestinations);
  };

  const getFilteredPlanets = () => {
    return planets
      .map(planet => ({
        name: planet.name,
        value: planet.name,
        label: planet.name,
      }))
      .filter(planet => !destinations
        .map(destination => destination.selectedPlanet.name)
        .includes(planet.name));
  };

  return (
    <div className="finding-falcon">
      <PageHeader title="Finding Falcon!" />
      <SubHeader title="Select planets you want to search in:" />
      <div className="finding-falcon--search">
        {isLoading && <Spinner />}
        {!isLoading &&
          planets.length &&
          destinations.map((destination, index) => (
            <Destination
              key={destination.name}
              options={getFilteredPlanets()}
              name={destination.name}
              value={destination.selectedPlanet}
              onChange={e => handleDestinationChange(e, index)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default FindingFalcon;
