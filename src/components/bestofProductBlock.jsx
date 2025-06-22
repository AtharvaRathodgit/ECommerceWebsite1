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

function Row_BestofProduct({ category }) {
    const filteredProducts = Data_BestOfProducts.filter(
        (item) => item.ProductSubCategory === category
    );

    return (
        <div className="my-5 pl-5 w-full">
            <h1 className="text-2xl font-semibold mb-3">Best of {category}</h1>

            <div className="w-full overflow-x-auto pb-2 scrollbar-hide overflow-y-hidden">
                <div className="flex gap-4 min-w-max">
                {filteredProducts.map((data, index) => (
                    <Block_BestofProduct data={data} key={index} />
                ))}
                </div>
            </div>
        </div>
    );
}

function BestofProducts(){
    return(
        <div className="my-15 w-full flex justify-center">
            <div className="w-[1400px] overflow">
                {AvaliableCategories.map((category, index) => (
                    <Row_BestofProduct category={category} key={index} />
                ))}
            </div>
        </div>
    )
}

export default BestofProducts;