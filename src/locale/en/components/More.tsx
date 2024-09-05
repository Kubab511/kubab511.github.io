export function More() {
  return (
    <>
      <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="more">
        <div className="z-9">
          <h5 className="text-xl font-bold text-white my-2">
            Do you have any other questions?
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            If you&apos;d like to know more about me, check out my LinkedIn, GitHub and Instagram profiles
          </p>
          <div className="flex flex-row gap-3">
            <a target="_blank" href="https://www.linkedin.com/in/kuba-barabasz/"><img className="w-10 h-10 scale-75 hover:scale-100 transform transition duration-250" src="/linkedin-icon.webp" alt="Linkedin Icon" /></a>
            <a target="_blank" href="https://www.github.com/Kubab511"><img className="w-10 h-10 scale-75 hover:scale-100 transform transition duration-250" src="/github-icon.webp" alt="Github Icon" /></a>
            <a target="_blank" href="https://www.instagram.com/kuba_barabasz/"><img className="w-10 h-10 scale-75 hover:scale-100 transform transition duration-250" src="/insta-icon.webp" alt="Instagram Icon" /></a>
          </div>
        </div>
      </section>
    </>
  )
}