import Image from "next/image";

interface LinkProps {
  title: string;
  url: string;
  icon: string;
  buttonStyle?: string;
}

const Link = ({title, url, icon, buttonStyle = 'default'}: LinkProps) => {

  return (
    <div>
      <a className={`button button-${buttonStyle}`} href={url} target="_blank" rel="noopener" role="button">
        <Image className="icon" src={`images/icons/${icon}`} alt="" width="40" height="40"/>

        {title}
      </a>
    </div>
  );
}
