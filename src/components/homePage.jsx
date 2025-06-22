import stripOffers from "../dataFiles/homePageMainOffers"
import { useState, useEffect } from "react";
import BestofProducts from "./bestofProductBlock.jsx"
import TopProductsBlock from "./topProductsBlock.jsx"


function OfferDiv({offerData}){
    return(
        <div
            className="w-full h-[80vh] bg-cover bg-center flex justify-center"
            style={{
                backgroundImage : `url(${offerData.ImageURL})`,
                boxShadow: 'inset 0 30px 30px -30px rgba(0, 0, 0, 0.5), inset 0 -30px 30px -30px rgba(0, 0, 0, 0.5)',
            }}
        >
            {/* <div className="absolute inset-0 bg-black/50"></div> */}

            <div 
                className="w-[1400px] flex flex-col justify-center h-full relative text-white"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)', }}
            >
                <h1
                    className="font-bold text-5xl max-w-[40vw] py-4"
                >
                    {offerData.Headline}
                </h1>

                <p
                    className="text-2xl italic pb-4"
                >
                    {offerData.Discription}
                </p>

                <a
                    href={offerData.OfferLink}
                    className="hover:bg-slate-900 hover:text-white text-black px-4 py-2 w-fit  transition duration-100 inline-block text-sm shadow-md hover:shadow-lg bg-white"
                >
                    Show Now
                </a>
            </div>
        </div>
    )
}

function MainBlock(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % stripOffers.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    
    return (
        <div id="OfferDivSpace" className="w-full overflow-hidden relative">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {stripOffers.map((offer, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <OfferDiv offerData={offer}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

function QuickLinksBlock() {
    return(
        <div className="h-[80px] bg-slate-200 flex justify-center">
            <div
                className="w-[1120px] h-full flex justify-around items-center"
            >
                <div
                    id="mobiles"
                    className="flex flex-col hover:scale-120 transition cursor-pointer"
                >
                    <a
                        href="#"
                        className="flex flex-row items-center transition"
                    >
                        <img src="/src/imageFiles/MobilePng.png" alt="Mobiles" className="h-10 w-auto mb-1"/>
                        <h1 className="text-lg">Mobiles</h1>
                    </a>
                </div>

                <div
                    id="laptops"
                    className="flex flex-col hover:scale-120 transition cursor-pointer"
                >
                    <a href="#" className="flex flex-row items-center transition">
                        <img src="/src/imageFiles/LaptopPng.webp" alt="Laptops" className="h-10 w-auto mb-1"/>
                        <h1 className="text-lg">Laptops</h1>
                    </a>
                </div>
                <div id="accessories" className="flex flex-col hover:scale-120 transition cursor-pointer">
                    <a href="#" className="flex flex-row items-center transition">
                        <img src="/src/imageFiles/AccessoriesPng.webp" alt="Accessories" className="h-10 w-auto mb-1"/>
                        <h1 className="text-lg">Accessories</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}


function MissionStatement(){
    return(
        <div className="w-full h-[35vh] flex justify-center items-center text-center bg-slate-100">
            <h1
                className="w-[60vw] font-bold text-2xl font-serif italic "
            >
                "Our mission is to discover, curate, and deliver the most innovative electronics and tech accessories — empowering every user with quality, performance, and smart design."
            </h1>
        </div>
    )
}


function HomePage(){
    return(
        <>
            <MainBlock />
            <QuickLinksBlock />
            <MissionStatement />
            <TopProductsBlock />
            <BestofProducts />
        </>
    )
}

export default HomePage;