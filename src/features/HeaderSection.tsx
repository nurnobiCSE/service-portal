const HeaderSection = () => {
  return (
    <div className="bg-[#f3ffff] flex flex-col md:flex-row gap-12 justify-center items-center py-2 w-full">
      <a href=""><img className="w-[140px] h-[50px]" src="images/logo.png" alt="logo" /></a>
      <div className="flex items-center gap-4 md:gap-12">
        <a href="">
          <p className="text-[#0b2144] text-2xl md:text-3xl font-semibold">Bangladesh e-Services Portal</p>
        </a>
        <img className="w-[60px] h-[60px]" src="images/flag.png" alt="flag" title="Bangladesh" />
      </div>
    </div>
  )
}

export default HeaderSection
