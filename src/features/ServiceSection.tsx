import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faMedkit, faGraduationCap, faComputer, faBuildingWheat, faVolleyball, faCircleDollarToSlot, faPeopleLine, faHandsHoldingCircle, faStopwatch20, faBusinessTime, faGavel } from '@fortawesome/free-solid-svg-icons';


const ServiceSection = () => {
  return (
   <div className="flex justify-center items-center mt-10">
     <div className="grid gap-3 md:gap-7 lg:gap-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faHouseChimneyWindow} />
        <p>Home-Service</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faMedkit} />
        <p>Medical-Services</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faGraduationCap} />
        <p>Education-Service</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faComputer} />
        <p>Computer-Service</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faBuildingWheat} />
        <p>Agriculture-Services</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faVolleyball} />
        <p>Sports & Arts</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faCircleDollarToSlot} />
        <p>Money & Tax</p> 
      </div>
      </a>
     <a href="">
     <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faPeopleLine} />
        <p>Labour-employement</p> 
      </div>
     </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faHandsHoldingCircle} />
        <p>Environment-Services</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faStopwatch20} />
        <p>Birth-Parenting</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faBusinessTime} />
        <p>Business-Services</p> 
      </div>
      </a>
      <a href="">
      <div className="flex flex-col h-40 w-40 border-4 border-[#19f0dc] items-center justify-center gap-3 bg-[#080241] text-white text-center rounded-full hover:bg-[#182332] p-2 transition-all duration-300">
        <FontAwesomeIcon className="md:text-4xl" icon={faGavel} />
        <p>Legal & Defence</p> 
      </div>
      </a>
    </div>
   </div>
  )
}

export default ServiceSection
