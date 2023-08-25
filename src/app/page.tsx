import Image from 'next/image'
import links from '@/data/links.json';
import {Link} from "@/types/Link";
import LittleLink from '@/components/LittleLink';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="container w-4/5">
        <div className="row">
          <div className="column mt-10 flex flex-col items-center">
            
            <Image src="images/littlelink.svg" alt="Littlelink Logo" width="100" height="100" />

            <h1 role="heading">LittleLink</h1>

            <p>An open source DIY <a href="https://linktr.ee" target="_blank" rel="noopener" role="link">Linktree</a> alternative.</p>

            {links.map((link: Link) => (
              <LittleLink key={link.title} link={link}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
