import { useState, createContext } from 'react';
// @ts-ignore
import {aboutMetadata as aboutMeData} from '../data/aboutMeData';
// @ts-ignore
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
// @ts-ignore
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutMeContext = createContext<any>(null);
export const AboutMeProvider = ({ children }: { children: React.ReactNode }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;