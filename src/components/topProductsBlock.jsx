import Data_TopProducts from "../dataFiles/topProductsData"

function RenderImage({imageURL}){
    return(
        <div
            className="h-[650px] w-[650px] bg-contain bg-center bg-no-repeat"
            style={{backgroundImage : `url(${imageURL})`}}
        ></div>
    )
}

function RenderTextBox({info}){
    return(
        <div
            className="h-[650px] w-[650px] flex flex-col justify-center gap-3"
        >
            <h1
                className="text-4xl font-semibold"
            >
                {info.ProductIntro}
            </h1>

            <div className="my-5 flex flex-col gap-3 font-light">
                <p>{info.ProductDiscription1}</p>
                <p>{info.ProductDiscription2}</p>
                <p >{info.OfferDiscription}</p>
            </div>
            

            <a
                className="hover:bg-slate-900 h-[50px] w-[250px] hover:text-white text-black px-4 py-2 transition duration-100 text-base border border-slate-900 bg-white flex justify-center items-center"
            >
                Learn More
            </a>

        </div>
    )
}

function Block({info, imagePostion = 'right', bgColor = "bg-slate-200"}){
    return(
        <div className={`${bgColor} w-full flex justify-center`}>
            <div
            
            className={`w-[1400px] h-[725px] flex flex-row justify-between items-center`}
            >
                {imagePostion === 'right' ? (
                    <>
                        <RenderTextBox info={info}/>
                        <RenderImage imageURL={info.ProductImageURL}/>
                    </>
                ) : (
                    <>
                        <RenderImage imageURL={info.ProductImageURL}/>
                        <RenderTextBox info={info}/>
                    </>
                )}
            </div>
        </div>
    )
}

function TopProductsBlock(){
    return(
        <div className="flex flex-col items-center">
            {Data_TopProducts.map((info, index) =>
                <Block
                    info={info}
                    imagePostion={index % 2 === 0 ? 'right' : 'left'}
                    bgColor={index % 2 === 0 ? 'bg-white' : 'bg-slate-200'}
                    key={index}
                />
            )}
        </div>
    )
}

export default TopProductsBlock;