export const FETCH_AREAS = 'FETCH_AREAS';
export const FETCH_THINGS = 'FETCH_THINGS';

export const fetchArias = () => async dispatch => {
    try {
        const response = await fetch('http://localhost:3002/areas');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        dispatch({
            type: FETCH_AREAS,
            payload: data
        });
    } catch (error) {
        console.error('Error fetching areas:', error);

    }
};

export const fetchThings = () => async dispatch => {
    try {
        const response = await fetch('http://localhost:3001/things');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        dispatch({
            type: FETCH_THINGS,
            payload: data
        });
    } catch (error) {
        console.error('Error fetching things:', error);
    }
};

