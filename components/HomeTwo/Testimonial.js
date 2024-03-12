import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
									What the clients say
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav red-color">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<FaArrowLeft />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<FaArrowRight />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Discovering Dhaka Lad transformed my professional journey. The LinkedIn Premium subscription I 
								got through them has been a game-changer for networking and unlocking business opportunities.”
							</div>
							<div className="client-info">
								{/* <div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div> */}
								<div className="client-name">
									<h6>Nusrat</h6>
									<span>Student, Bracu</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Thanks to Dhaka Lad, I enrolled in Coursera Premium at a fraction of the cost. 
								It&apos;s been an empowering experience, accessing world-class courses and specializations that seemed out of reach before. ”
							</div>
							<div className="client-info">
								{/* <div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div> */}
								<div className="client-name">
									<h6>Tamim</h6>
									<span>Designer</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Dhaka Lad's deal on Canva Premium was a steal! As a freelance graphic designer, 
								having access to Canva&apos;s premium assets and features has significantly streamlined my workflow and elevated my designs.”
							</div>
							<div className="client-info">
								{/* <div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div> */}
								<div className="client-name">
									<h6>Shadman Shakib</h6>
									<span>Business Owner</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Securing ChatGPT Premium through Dhaka Lad has been pivotal for my projects. The enhanced capabilities have significantly 
								boosted my productivity and innovation. ”
							</div>
							<div className="client-info">
								{/* <div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div> */}
								<div className="client-name">
									<h6>Fahad</h6>
									<span>Tech Innovator</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav red-color">
						<div className="testimonial-nav-prev" onClick={() => sliderRef.current?.slickPrev()}>
							<FaArrowLeft />
						</div>
						<div className="testimonial-nav-next" onClick={() => sliderRef.current?.slickNext()}>
							<FaArrowRight />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
