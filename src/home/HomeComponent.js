import { Link } from "react-router-dom";

const HomeComponent = () => {
	const projects = [
		{
			id: 1,
			name: "ePay Money Transfer",
			title: "MERN STACK",
			description:
				"Built using React.js, Express.js, Mongoose, with MongoDB for the database, and deployed on Vercel.",
			image: "https://source.unsplash.com/1500x1000/?reactjs",
			url: "https://epay-money-transfer.vercel.app",
		},
		{
			id: 2,
			name: "Tri-Payment System",
			title: "REACT JS",
			description:
				"Developed with Reactjs, JSON web server & deployed on Vercel.",
			image: "https://source.unsplash.com/1500x1000/?reactjs",
			url: "https://tri-payment.vercel.app",
		},
		{
			id: 3,
			name: "VASTBURGERS",
			title: "VASTBUGERS",
			description:
				"A burger application built with React.js utilizing Hooks and deployed on Vercel.",
			image: "https://source.unsplash.com/1500x1000/?reactjs",
			url: "https://vast-burgers-api.vercel.app/",
		},
		{
			id: 4,
			name: "VASTECH JOBS",
			title: "VASTECH JOBS",
			description:
				"A jobs API crafted using React.js with Hooks and hosted on Vercel.",
			image: "https://source.unsplash.com/1500x1000/?reactjs",
			url: "https://vastech-jobs-api.vercel.app/",
		},
		{
			id: 5,
			name: "STUDENT LIST",
			title: "UNIVERSITY OF SMS",
			description:
				"An API for students developed with Angular and hosted on Vercel.",
			image: "https://source.unsplash.com/1500x1000/?reactjs",
			url: "https://angular-university-sms.vercel.app/",
		},
	];

	return (
		<section className="home bg-dark text-light vh-1000">
			<div className="container p-4">
				<h1 className="text-uppercase">Recent Projects</h1>
				<hr />

				<div className="row">
					{projects.map((project) => (
						<div className="col-md-3 mb-3" key={project.id}>
							<div className="card">
								<img
									src={project.image}
									className="card-img-top"
									alt={project.name}
								/>
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
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
			</div>
		</section>
	);
};

export default HomeComponent;
