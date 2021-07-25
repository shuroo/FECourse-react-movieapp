import React from "react";
import './ImgComponent.css';
//import myImg from './image.png'

function CardComponent({myImg}) {
	
	return (
		<div>
			<img src={myImg}/>
			<OtherComp/>
</div>
	)
}

export default SomeComp;
