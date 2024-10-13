import Image from "next/image";
import {Link} from "@/types/Link";

interface LinkProps {
    link: Link
}

const LinkButton = ({link}: LinkProps) => {
    const iconSize = 32;

    const {buttonStyle, url, icon, title} = link;

    return (
        <div className="px-2 py-1">
            <a className={`button button-${buttonStyle} flex flex-row justify-center`} role="button"
               href={url} target="_blank" rel="noopener" aria-label={title}
            >
                <Image className="inline pt-0 pe-3 pb-1 ps-0"
                       src={`images/icons/${icon}`}
                       alt={title}
                       width={iconSize}
                       height={iconSize}
                />

                <span>{link.title}</span>
            </a>
        </div>
    );
}

export default LinkButton;
