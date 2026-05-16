import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectSingle = ({ title, category, image, githubLink, liveDemo }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<Link to="/projects/single-project" aria-label="Single Project">
					<div className="w-full h-48 overflow-hidden rounded-t-xl">
							<img
								src={image}
								className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
								alt="Single Project"
							/>
						</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</Link>

				{/* GitHub & Live Demo buttons */}
				<div className="flex justify-center gap-4 px-4 pb-6">
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-secondary-dark text-sm font-general-medium text-ternary-dark dark:text-ternary-light hover:bg-primary-light dark:hover:bg-secondary-dark transition-colors duration-300"
						>
							<FiGithub className="w-4 h-4" />
							GitHub
						</a>
					)}
					{liveDemo && (
						<a
							href={liveDemo}
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-general-medium transition-colors duration-300"
						>
							<FiExternalLink className="w-4 h-4" />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;