import type { FC } from "react";
import { AiFillSetting, AiOutlineRadarChart } from "react-icons/ai";
import { GiSplashyStream } from "react-icons/gi";
import { TbDatabaseImport } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import Link from "next/link";
import { Tag } from "@/components/pages/shared/Tag";
import { useSession } from "next-auth/react";
import { useCurrentOrganization } from "@/utils/hooks/use-organization";
import type { User } from '@/types/User';


const Sidebar: FC = function () {
	const { data } = useSession();
	const { organization, setOrganization } = useCurrentOrganization();

	if (data?.user) { // default to first organization user has, in future we'll want them to be able to select their organization
		const user = data?.user as User;
		setOrganization(user.organizations[0] ? user.organizations[0] : null);
	}

	return (
		<aside id="cta-button-sidebar" className="top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li className="cursor-default border-2 border-blue-800 rounded-lg">
						<div className="flex items-center p-2  rounded-lg text-white  ">
							<VscOrganization color="#6b7280" size={25} />
							<span className="ml-3">Org: {organization?.name === 'unknown' ? 'Default' : organization?.name}</span>
						</div>
					</li>
					<li>
						<Link href="/dashboard/insights" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<AiOutlineRadarChart color="#6b7280" size={25} />
							<span className="ml-3">Insights</span>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/sources" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<TbDatabaseImport color="#6b7280" size={25} />
							<span className="ml-3">Sources</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium  rounded-full">
								<Tag color={'sky'}>
									3
								</Tag>
							</span>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/streams" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<GiSplashyStream color="#6b7280" size={25} />
							<span className="flex-1 ml-3 whitespace-nowrap">
								Streams
							</span>
							<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full">
								<Tag color={'amber'}>
									Preview
								</Tag>
							</span>
						</Link>
					</li>
					<li>
						<Link href="/dashboard/settings" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<AiFillSetting color="#6b7280" size={25} />
							<span className="flex-1 ml-3 whitespace-nowrap">
								Settings
							</span>
						</Link>
					</li>
				</ul>
				<div id="dropdown-cta" className="p-4 mt-6 rounded-lg  bg-blue-900" role="alert">
					<div className="flex items-center mb-3">
						<span className="text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-orange-200">Beta</span>
					</div>
					<p className="mb-3 text-sm text-blue-400">
						We're currently in beta so don't hate us
					</p>
					<p className="mb-3 text-sm  text-blue-400 text-center">

						🥰<br />
						👉👈
					</p>
				</div>
			</div>
		</aside>

	);
};



export default Sidebar;