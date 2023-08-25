import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="row">
          <div className="column mt-10">
            
            <Image src="images/littlelink.svg" alt="Littlelink Logo" width="100" height="100" />

            <h1 role="heading">LittleLink</h1>

            <p>An open source DIY <a href="https://linktr.ee" target="_blank" rel="noopener" role="link">Linktree</a> alternative.</p>

            <a className="button button-default" href="https://martacodes.it" target="_blank" rel="noopener" role="button">
              <Image className="icon" src="images/icons/littlelink.svg" alt="" width="40" height="40" />
              LittleLink
            </a>

            <a className="button button-linked" href="#" target="_blank" rel="noopener" role="button">
              <Image className="icon" src="images/icons/linkedin.svg" alt="" width="40" height="40" />
              LinkedIn
            </a>

            <br/>


          </div>
        </div>
      </div>
    </main>
  )
}
