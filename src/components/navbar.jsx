import offers from "../dataFiles/offers"


function OfferStrip() {
    return (
        <div className="relative flex overflow-x-hidden h-9 bg-gray-500">
            <div
                id="offerStripx"
                className="marquee whitespace-nowrap flex items-center h-full"
            >
                {
                    offers.map((offer, index) => (
                        <span key={index} className="text-white mx-6 text-sm">
                            {offer}
                        </span>
                    ))
                }
                
            </div>
            <div className="absolute top-0 h-full marquee2 whitespace-nowrap flex items-center">

                {
                    offers.map((offer, index) => (
                        <span key={`copy_${index}`} className="text-white mx-6 text-sm">
                            {offer}
                        </span>
                    ))
                }

            </div>
        </div>
    )
}


function Nav(){
    let navBarButtonClass = "hover:bg-slate-900 hover:text-white px-2 py-0.5 rounded-md text-center transition duration-100";

    return (
        <div className="w-full flex justify-center items-center h-[80px] bg-slate-200">
            <div className="w-[1120px] flex flex-col justify-around h-full">
                <div id="Block1" className="flex justify-between items-center">
                    <h1
                        className="font-bold text-4xl font-serif italic inline"
                    >
                        Minimal
                    </h1>

                        <div 
                        id="Block2"
                        className="flex justify-center items-center"
                    >
                        <ul
                            className="flex justify-around gap-4"
                        >
                            <a href="#" className={navBarButtonClass}>Home</a>
                            <a href="#" className={navBarButtonClass}>Shop</a>
                            <a href="#" className={navBarButtonClass}>Deals</a>
                            <a href="#" className={navBarButtonClass}>Contact</a>
                            <a href="#" className={navBarButtonClass}>About Us</a>
                            <a href="#" className={navBarButtonClass}>Account</a>
                            <a href="#" className={navBarButtonClass}>Cart</a>
                        </ul>
                    </div>

                    <div id="SearchBoxAndProfile" className="flex items-center relative h-8 w-[300px] ">
                        <input 
                            type="text" 
                            className="bg-white rounded-md px-3 py-1 text-sm h-full w-full placeholder:text-slate-500 border border-slate-400 focus:border-slate-600 focus:outline-none focus:shadow-md text-slate-700" 
                            placeholder="Mobile, Laptop"
                        />
                        <button
                            className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-0.5 flex items-center rounded text-center text-sm bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow border border-transparent"
                            type="button"
                        >
                            Search
                        </button>
                    </div>

                </div>
                

            </div>
        </div>
    )
}


function Navbar(){
    return(
        <div>
            <OfferStrip />
            <Nav />
        </div>
    )

}

export default Navbar;