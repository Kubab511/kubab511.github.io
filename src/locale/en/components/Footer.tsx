export function Footer() {
  return (
    <>
      <div className="footer border border-transparent border-t-[#484b6a] text-slate-950">
        <div className="container mx-auto p-6 flex flex-col items-center justify-between min-h-fit sm:flex-row">
          <img className="h-10 w-10" src="/favicon.webp" alt="Logo" />
          <p className="text-slate-600 sm:pt-0 pt-2 my-auto pl-4">Copyright &#169; Jakub Barabasz 2024</p>
        </div>
      </div>
    </>
  )
}