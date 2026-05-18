import AboutClientSingle from './AboutClientSingle';
// @ts-ignore
import { clientsData, clientsHeading } from '../../data/clientsData';

const categories = [
	{
		label: 'Frontend',
		ids: [1, 2, 3, 4, 5, 6, 7],
	},
	{
		label: 'Backend',
		ids: [8, 9, 10, 11, 12],
	},
	{
		label: 'Tools & DevOps',
		ids: [13, 14, 16, 17],
	},
	{
		label: 'Mobile',
		ids: [15],
	},
	{
		label: 'Data & AI',
		ids: [18, 19, 20, 21],
	},
];

const AboutClients = () => {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-10">
				{clientsHeading}
			</p>

			{categories.map((category) => {
				const items = clientsData.filter((c:any) =>
					category.ids.includes(c.id)
				);
				return (
					<div key={category.label} className="mb-10">
						{/* Category label */}
						{/* Category label */}
					<div className="flex items-center gap-4 mb-5">
						<span className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 whitespace-nowrap">
							{category.label}
						</span>
						<div className="flex-1 h-px bg-gray-200 dark:bg-gray-600" />
					</div>
                    
						{/* Cards grid */}
						<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
							{items.map((client: any) => (
								<AboutClientSingle
									key={client.id}
									title={client.title}
									image={client.img}
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AboutClients;