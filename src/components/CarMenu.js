import { HashLink as Link } from 'react-router-hash-link';

function CarMenu() {
  return (
    <div className='md:fixed'>
      <div className='sm:pl-[30px] md:pl-[0px]'>
        <div className='flex pt-6 whitespace-nowrap'>
          <Link className="text-slate-400 text-[14px]" to="/">Главная </Link>
          <a className="text-[14px]">— Модельный ряд</a>
        </div> 
        <div className='pt-[7px]'>
          <a className='text-[20px]  '>Автомобили:</a>
        </div>
        <div className="md:flex md:flex-col sm:flex sm:flex-row gap-[20px] pt-[20px] flex text-[19px]">
          <Link to="/CarModel#NIO" className='font-Bold hover:text-[#91036d] duration-[90ms]'>NIO</Link>
          <Link to="/CarModel#Zeeker" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Zeekr</Link>
          <Link to="/CarModel#Lixiang" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Lixiang</Link>
          <Link to="/CarModel#BYD" className='font-Bold hover:text-[#91036d] duration-[90ms]'>BYD</Link>
          <Link to="/CarModel#Voyah" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Voyah</Link>
        </div>
      </div>
    </div>
  )
}

export default CarMenu;



