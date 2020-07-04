import React  from 'react';
import GiftGridItem from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GiftGrid = ({ category }) => {



	const {data:images, loading} = useFetchGifs(category)


	return (
		<div>
			<h2 className="mt">{category}</h2>
			{loading && <p> Loading ...</p> }

			<ol className="card-grid">
				{images.map((img) => (
					<GiftGridItem key={img.id} {...img} />
				))}
			</ol>
		</div>
	);
};

export default GiftGrid;
