import React, { useContext } from 'react';
import Slider from 'react-slick';
import { AuthContext } from 'context/AuthProvider';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default function ProfileCarousel() {
	const { user } = useContext(AuthContext);

	const settings = {
		arrows: true,
		className: 'max-h-profile',
		dots: true,
		infinite: false,
		useCSS: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots) => (
			<ul
				style={{
					top: 0,
					bottom: 'unset',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{dots}
			</ul>
		),
		customPaging: () => (
			<div className="w-full h-full py-1 opacity-20">
				<div className="h-1 bg-gray-80 rounded-25"></div>
			</div>
		),
	};

	return (
		<>
			<Slider {...settings}>
				{user.photos.map(
					(item, i) =>
						item !== '' && (
							<img
								key={i}
								src={item}
								alt=""
								className="w-full h-117 bg-gray-30 bg-center bg-cover bg-no-repeat rounded-t-lg"
							></img>
						)
				)}
			</Slider>
		</>
	);
}
