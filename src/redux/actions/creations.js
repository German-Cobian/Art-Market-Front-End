import { FETCH_CREATIONS } from '.';
import { getToken } from './auth';

export const displayJourneymen = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/v1/creations', {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: getToken(),
     },
  });
  if (response.ok) {
    const data = await response.json();
    const creations = data.map((creation) => creation.attributes);
    dispatch({ type: FETCH_CREATIONS, payload: journeymen });
    } else {
  dispatch({ type: FETCH_CREATIONS, payload: [] });
  }
};
