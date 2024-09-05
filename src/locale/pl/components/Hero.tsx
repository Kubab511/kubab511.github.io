import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <>
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-600">
                Cześć, jestem<br/>
              </span>
              <TypeAnimation
                sequence={[
                  "Kuba",
                  1000,
                  "Student",
                  1000,
                  "Programista",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Student informatyki 2 roku
            </p>
            <div>
              <a className="px-6 inline-block py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-500 to-green-600 hover:from-sky-700 hover:to-green-800 text-white" target="_blank" href="mailto:barabasz.kuba@gmail.com">Napisz do mnie</a>
              <a className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-green-600 hover:bg-slate-800 text-white mt-3" target="_blank" href="/resume_pl.pdf">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                  Pobierz CV
                </span>
              </a>
            </div>
          </div>
          <div className="col-span-4 place-self-center mt-4 ml-0 sm:ml-8 lg:mt-0 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/avatar.webp" alt="Hero Image"/>
          </div>
        </div>
      </section>
    </>
  )
}