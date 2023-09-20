import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} = useLoaderData();
    // console.log(products);
    return (
        <div className='max-w-screen-xl mx-auto min-h-screen grid grid-cols-3 mt-10 gap-5'>
            
            {
                products.map(product=> <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;