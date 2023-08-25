import Image from "next/image";
import {Link} from "@/types/Link";

interface LinkProps {
  link: Link
}

const LittleLink = ({link}: LinkProps) => {
  const iconSize = 32;

  return (
    <div className="px-2 py-1">
      <a className={`button button-${link.buttonStyle} flex flex-row`} role="button"
         href={link.url} target="_blank" rel="noopener"
      >
        <Image className="inline pt-0 pe-3 pb-1 ps-0" src={`images/icons/${link.icon}`} alt="" width={iconSize} height={iconSize}/>

        <span>{link.title}</span>
      </a>
    </div>
  );
}

export default LittleLink;
