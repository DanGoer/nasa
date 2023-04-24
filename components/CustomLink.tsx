// Custom Link component, regulates also the activity status of the link with the highligthing

import Link from "next/link";
import { CustomLinkI } from "../ts/interfaces/global_interfaces";

export default function CustomLink({ to, children, ...props }: CustomLinkI) {
  //todo: migrate this functionality to a next option
  //const resolvedPath = useResolvedPath(to);
  //const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div
      className=""
      //isActive ? "shadow-2xl text-primaryLightOn dark:text-primaryDarkOn" : ""
    >
      <Link href={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
