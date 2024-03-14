import Link from "next/link";

export default function HeroTwo() {
	return (
		<section className="hero-welcome-wrapper hero-2">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 text-center text-xl-start col-12">
							<div className="hero-contents">
								<h1>Subscriptions and corporate solutions</h1>
								<p>
									We seamlessly deliver digital services, tailored
									subscriptions, and robust corporate solutions to empower major startups.
									Our commitment to excellence ensures
									that your business thrives in today's dynamic landscape.
								</p>
								<Link href="#services">
									<a className="theme-btn blue-color">Hot Deals 🔥 </a>
								</Link>
								<Link href="/">
									<a href="#" className="theme-btn minimal-btn">
										Get in touch
									</a>
								</Link>
							</div>
						</div>
						<div className="col-xl-6 col-12 text-center text-xl-end">
							<div className="hero-img-wrapper">
								<img src="/img/hero.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="hero-lines">
					<img src="/img/home2/hero-line.png" alt="" />
					<img src="/img/home2/hero-white-line.png" alt="" />
				</div>
			</div>
		</section>
	);
}
