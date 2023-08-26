import Image from 'next/image'
import links from '@/data/links.json';
import data from '@/data/data.json';
import {Link} from "@/types/Link";
import LinkButton from '@/components/LinkButton';
import ReactMarkdown from "react-markdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="container w-4/5">
        <div className="row">
          <div className="column mt-10 flex flex-col items-center">
            
            <Image className="rounded-3xl m-3" src={data.icon} alt={data.iconAlt} width="100" height="100" />

            <h1 className="mb-3 text-2xl md:text-3xl" role="heading">{data.title}</h1>

            {links.map((link: Link) => (
              <LinkButton key={link.title} link={link}/>
            ))}

            <span className="flex flex-col items-center my-4 mx-2 text-xs md:text-sm">
              <ReactMarkdown>
                {data.footer}
              </ReactMarkdown>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
