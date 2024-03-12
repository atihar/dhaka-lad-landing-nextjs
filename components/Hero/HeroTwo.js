import Link from "next/link";

export default function HeroTwo() {
	return (
		<section className="hero-welcome-wrapper hero-2">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 text-center text-xl-start col-12">
							<div className="hero-contents">
								<h1>Premiums at unbeatable price</h1>
								<p>
									Advanced software for managing your business. Through which business can be
									controlled very easily as required.
								</p>
								<Link href="/">
									<a className="theme-btn red-color">Great Offers</a>
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
