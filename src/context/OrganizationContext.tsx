import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";

interface Organization {
	name: string | null;
	id: string;
}

interface OrganizationContextType {
	organization: Organization	| null;
	setOrganization: Dispatch<SetStateAction<Organization | null>>;
}

export const OrganizationContext = createContext<OrganizationContextType | null>(null);

export function OrganizationProvider({ children }: { children: ReactNode }) {
	const [organization, setOrganization] = useState<Organization | null>({id: '', name: ''});

	return (
		<OrganizationContext.Provider value={{organization, setOrganization}}>
			{children}
		</OrganizationContext.Provider>
	);
}