const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 p-4 bg-secondary-light dark:bg-ternary-dark border border-ternary-light dark:border-ternary-dark shadow-sm rounded-xl cursor-pointer hover:shadow-md transition duration-300 hover:-translate-y-1">
			<div className="w-10 h-10 flex items-center justify-center">
				<img
					src={image}
					className="w-full h-full object-contain"
					alt={title}
				/>
			</div>
			<p className="text-sm font-medium text-center text-primary-dark dark:text-ternary-light">
				{title}
			</p>
		</div>
	);
};

export default AboutClientSingle;