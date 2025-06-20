import {Data_BestOfProducts, AvaliableCategories} from "../dataFiles/BestOfProductsData"

function Block_BestofProduct({data}){
    return (
        <div className="inline hover:scale-110 transition">
            <a href={data.ProductCategoryLink}>
                <div className="h-[250px] w-[200px] flex flex-col justify-center items-center overflow-hidden">
                    <img
                        src={data.ProductCategoryImageURL}
                        alt="data.ProductCategory"
                        className="h-[175px]"
                    />
                    <h1>{data.ProductCategory}</h1>
                    <h1 className="font-bold">From ₹{data.StartingFromPrice}</h1>
                </div>
            </a>
        </div>
    )
}

function Row_BestofProduct({category}) {
    return(
        <div
            className="my-5 px-5"
        >
            <h1
                className="text-2xl font-semibold"
            >Best of {category}</h1>

            <div
                className="flex flex-row w-full overflow-hidden"
            >
                {Data_BestOfProducts.map((Data, index) => {
                    if(Data.ProductSubCategory === category) {
                        return <Block_BestofProduct data={Data} key={index}/>
                    }
                    else return null;
                })}
            </div>
        </div>
    )
}

function BestofProducts(){
    return(
        <div className="my-10">
            {AvaliableCategories.map((category, index) => (
                <Row_BestofProduct category={category} key={index} />
            ))}
        </div>
    )
}

export default BestofProducts;