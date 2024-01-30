import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";

const HomeComponent = () => {
	const [loading, setLoading] = useState(true);
	const projects = [
		{
			id: 1,
			name: "ePay Money Transfer",
			title: "ePay Money Transfer",
			description:
				"Built using React.js, Express.js, Mongoose, with MongoDB for the database, and deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://epay-money-transfer.vercel.app",
		},
		{
			id: 2,
			name: "Tri-Payment System",
			title: "Tri-Payment System",
			description:
				"Developed with Reactjs, JSON web server & deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://tri-payment.vercel.app",
		},
		{
			id: 3,
			name: "VASTBURGERS",
			title: "VASTBUGERS",
			description:
				"A burger application built with React.js utilizing Hooks and deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://vast-burgers-api.vercel.app/",
		},
		{
			id: 4,
			name: "VASTECH JOBS",
			title: "VASTECH JOBS",
			description:
				"A jobs API crafted using React.js with Hooks and hosted on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://vastech-jobs-api.vercel.app/",
		},
		{
			id: 5,
			name: "STUDENT LIST",
			title: "UNIVERSITY OF SMS",
			description:
				"An API for students developed with Angular and hosted on Vercel.",
			image: "https://angular.io/assets/images/logos/angular/angular.svg",
			url: "https://angular-university-sms.vercel.app/",
		},
		{
			id: 6,
			name: "BLOG",
			title: "REACT JS BLOG",
			description:
				"React.js blog application built with React.js with Hooks and deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://react-mini-blog.vercel.app/",
		},
		{
			id: 7,
			name: "PAYSII",
			title: "PAYSII MONEY TRANSFER",
			description:
				"Paysii online money transfer application built with React.js and deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://paysii.vercel.app",
		},
		{
			id: 8,
			name: "Vehicle Inventory",
			title: "Vehicle Inventory",
			description:
				"Vehicle Inventory application built with Angular and deployed on Vercel.",
			image: "https://angular.io/assets/images/logos/angular/angular.svg",
			url: "https://angular-cars-api.vercel.app/",
		},
		{
			id: 9,
			name: "Redux Shopping Cart",
			title: "Redux Shopping Cart",
			description:
				"React & Redux shopping cart application built with React & Redux and deployed on Vercel.",
			image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			url: "https://react-redux-shopping-cart-six.vercel.app/",
		},
		{
			id: 10,
			name: "KPS Messaging",
			title: "KPS Messaging",
			description:
				"KPS Messaging application that is built with Angular and deployed on Vercel.",
			image: "https://angular.io/assets/images/logos/angular/angular.svg",
			url: "https://kp-messaging.vercel.app/",
		},
		{
			id: 11,
			name: "Angular ecommerce",
			title: "Angular ecommerce",
			description:
				"Ecommerce platform powered by Angular, constructed and deployed on Vercel.",
			image: "https://angular.io/assets/images/logos/angular/angular.svg",
			url: "https://custom-ecommerce-angular.vercel.app/",
		},
		{
			id: 12,
			name: "Angular potcast",
			title: "Potcast App",
			description:
				"Angular podcast app developed using Angular and hosted on Vercel.",
			image: "https://angular.io/assets/images/logos/angular/angular.svg",
			url: "https://podcast-blue-two.vercel.app/",
		},
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear timeout to avoid memory leaks
		return () => clearTimeout(timer);
	}, []);
	return (
		<section className="home bg-info text-light vh-1000">
			<div className="container p-4">
				{loading ? (
					<div>
						<Loading />
					</div>
				) : (
					<div>
						<h1 className="text-uppercase">Recent Projects</h1>
						<hr />

						<div className="row">
							{projects.map((project) => (
								<div
									className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3"
									key={project.id}
								>
									<div className="card">
										<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
											{project.id}
										</span>
										<img
											src={project.image}
											className="card-img-top img-fluid img-thumbnail bg-dark"
											alt={project.name}
											style={{ height: "150px" }}
										/>
										<div className="card-body">
											<h5 className="card-title text-uppercase">
												{project.title}
											</h5>
											<p className="card-text">{project.description}</p>
											<Link
												to={project.url}
												target="_blank"
												className="btn btn-outline-warning btn-sm"
											>
												Visit
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* row 2 */}
						<div className="row">
							<div className="col-md-12 text-secondary text-center">
								<div className="bg-dark px-4">
									<span>
										&copy; Copyright {new Date().getFullYear()}. Develped by
										Mahmoud Osman.
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeComponent;
