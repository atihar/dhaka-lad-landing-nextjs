import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/">
										<a className="logo-link h1 text-white fw-bold">
											<img src="/img/dhakalad.png" alt="dhakalad" />
										</a>
									</Link>
									<p>
										Dhaka Lad stands as a beacon of opportunity, ensuring that everyone has the
										chance to avail themselves of the resources they need to succeed and make their mark on the digital landscape.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Most Popular</h5>
								</div>
								<ul>
									<li>
										<Link href="/">
											<a>Chatgpt Plus</a>
										</Link>
									</li>
									<li>
										<Link href="/">
											<a>Linkedin Premium</a>
										</Link>
									</li>
									<li>
										<Link href="/#">
											<a>Netflix</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Canva Pro</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Recently Added</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>FB Page Chatbot</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Amazon Prime</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Coursera Plus</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Linkedin Premium</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Resources</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>We accept bkash/nagad/bank transfer</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2023-2024{" "}
								<Link href="https://weabers.com">
									<a>Crafted by Weabers</a>
								</Link>{" "}
								|| All Rights Reserved by Dhaka Lad.
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="https://www.facebook.com/dhakalad">
								<a>
									<FaFacebookF />
								</a>
							</Link>
							{/* <Link href="#">
								<a>
									<FaTwitter />
								</a>
							</Link> */}
							<Link href="https://instagram.com/dhakaladbd">
								<a>
									<FaInstagram />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/company/dhakalad/">
								<a>
									<FaLinkedinIn />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
