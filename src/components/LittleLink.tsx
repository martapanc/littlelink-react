import Image from "next/image";
import {Link} from "@/types/Link";

interface LinkProps {
  link: Link
}

const LittleLink = ({ link}: LinkProps) => {

  return (
    <div>
      <a className={`button button-${link.buttonStyle}`} href={link.url} target="_blank" rel="noopener" role="button">
        <Image className="icon" src={`images/icons/${link.icon}`} alt="" width="40" height="40"/>

        {link.title}
      </a>
    </div>
  );
}

export default LittleLink;
