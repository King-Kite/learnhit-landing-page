import React, { useEffect, useState } from "react";
import Content from "./Content";
import Directions from "./Directions";
import Indicators from "./Indicators";
import styles from "../../../styles/Hero.module.css";

const imageStyle = "bg-fixed duration-1000 flex transition-all transform";

const carouselImages = [
	"carousel-1.jpg",
	"carousel-2.jpg",
	"carousel-3.jpg"
];

const Hero = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [play, setPlay] = useState(true);

	const goToPrevious = () => {
		setPlay(false);
		if (currentImage <= 0) setCurrentImage(carouselImages.length - 1);
		else setCurrentImage(currentImage - 1);
		setPlay(true);
	};

	const goToNext = () => {
		setPlay(false);
		if (currentImage >= carouselImages.length - 1) setCurrentImage(0);
		else setCurrentImage(currentImage + 1);
		setPlay(true);
	};

	const goToSlide = (index) => {
		setPlay(false);
		setCurrentImage(index)
		setPlay(true);
	}

	useEffect(() => {
		let timeout;
		if (play) {
			timeout = setTimeout(() => {
				if (currentImage >= carouselImages.length - 1) {
					setCurrentImage(0);
				} else {
					setCurrentImage(currentImage + 1);
				}
			}, 8000);
		} else clearTimeout(timeout);
		return () => {
			clearTimeout(timeout);
		};
	}, [currentImage, play]);

	return (
		<section className={styles.container}>
			<div
				className={`${styles.image} ${imageStyle}`}
				style={{
					backgroundImage: `
				  	linear-gradient(
				  		rgba(0, 0, 0, 0.3), 
				  		rgba(0, 0, 0, 0.7)), 
				  		url(\"/assets/images/carousel/${carouselImages[currentImage]}\"
				  	)
				  `,
				}}
			>
				<Content />
			</div>

			<Directions onPrevious={goToPrevious} onNext={goToNext} />

			<Indicators currentIndex={currentImage} length={carouselImages.length} goToSlide={goToSlide} />
		</section>
	);
};

export default Hero;
