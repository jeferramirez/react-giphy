

	export const getGift = async (category) => {
		const url =
			`https://api.giphy.com/v1/gifs/search?api_key=O7wEvyI3DibGvOFEJK6tZdW5WTRbRV48&q=${encodeURI(category)}&limit=10`;
		const resp = await fetch(url);
		const { data } = await resp.json();
		const giftData = data.map((element) => {
			return {
				id: element.id,
				title: element.title,
				url: element.images.downsized_medium.url,
			};
		});
		return(giftData);
	};
