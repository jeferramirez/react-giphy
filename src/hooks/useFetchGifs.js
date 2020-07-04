import { useState, useEffect } from 'react';
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [state, steState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGift(category).then((imgs) => {
			steState({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);

	return state;
};
