import dynamic from "next/dynamic";
import Link from "next/link";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Divider, Logo } from "@/components/shared/icons";
import Meta from "./meta";
import ProjectSelect from "./project-select";
import UserDropdown from "./user-dropdown";

const NavTabs = dynamic(() => import("./nav-tabs"), {
	ssr: false,
	loading: () => <div className="-mb-0.5 h-12 w-full" />,
}); // dynamic import to avoid react hydration mismatch error

export default function AppLayout({
	children,
	bgWhite,
}: {
	children: ReactNode;
	bgWhite?: boolean;
}) {

	return (
		<div>
			<Toaster />
			<div className={`min-h-screen w-full ${bgWhite ? "bg-white" : "bg-gray-50"}`}>
				<div className="sticky top-0 left-0 right-0 z-30 border-b border-gray-200 bg-white">
					<div className="mx-auto max-w-screen-xl px-2.5 md:px-20">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<Link href="/reports">
									<Logo className={""} />
								</Link>
								<Divider className="h-8 w-8 text-gray-200 sm:ml-3" />
								<ProjectSelect />
							</div>
							<UserDropdown />
						</div>
						<NavTabs />
					</div>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}