export default function Home() {
  return (
    <main className="flex min-h-screen bg-bright-blue flex-col font-mono justify-between p-24">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        </div> */}

      <div className="relative mb-16 bg-white h-16 w-1/2 align-baseline text-center text-3xl text-black border-4 border-black drop-shadow-4xl">
       Ben Howarth
      </div>

      <div className="relative self-center bg-white h-64 w-1/2 align-baseline text-center text-black border-8 border-black drop-shadow-2xl">
      Software Developer with four years of development experience based in Cork, Ireland. 
      Currently returning from a career break which began in Sept 2022 and lasted until May 2023. 
      I used this time to travel around Mexico and Central America and train for a half marathon (hopefully have a full coming next year).
      Currently looking for a new full stack role, ideally using Kotlin/Java and React but open to learning other tech. 
      I&apos;m working on some personal projects at the moment which will be available to check out here.
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left space-x-32">
        <a
          href="https://react-mt-40-drum-sequencer.vercel.app/"
          className="drop-shadow-3xl group border-4 border-black bg-bright-green px-5 py-4 transition-colors hover:bg-bright-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            MT-40 Drum Sequencer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Drum Sequencer built using React, typescript, Tone.js and sounds from the Casio MT-40.
          </p>
        </a>
        <div
          // href=""
          className="drop-shadow-3xl group border-4 border-black bg-bright-green px-5 py-4 transition-colors hover:bg-bright-yellow"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            MT-40 Synth Sequencer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         Coming soon! 
          </p>
        </div>

      </div>
    </main>
  )
}
