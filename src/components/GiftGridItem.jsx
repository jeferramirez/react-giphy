import React from 'react';
import { Card } from 'antd';


const GiftGridItem = ({ url, id, title }) => {
	return (
		<Card
            hoverable
            bordered
            title= {title}
			style={{ width: 240, height: 300, marginRight:20, marginTop: 20}}
			cover={<img src={url} alt={title}  className="card-img" />}
		>
			{/* <Meta title="Europe Street beat" description={title} /> */}
		</Card>
	);
};

export default GiftGridItem;
