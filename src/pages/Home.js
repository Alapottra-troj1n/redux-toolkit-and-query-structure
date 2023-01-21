import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../features/filters/filterSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const brands = useSelector(state => state.filter.brands);
  const stock = useSelector(state => state.filter.stock);
  const dispatch = useDispatch();
  let content;

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }, []);

  if(products.length){
    content = products.map((product) => (
      <ProductCard key={product._idl} product={product} />
    ))
  }
  if(stock){
    content = products.filter((product) => product.status === true).map((product) => <ProductCard product={product} />)
  }



  return (

    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${stock && 'bg-indigo-500 text-white'}`}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button onClick={() => dispatch(toggleBrands('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') && 'bg-indigo-500 text-white'} `}>
          AMD
        </button>
        <button onClick={() => dispatch(toggleBrands('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') && 'bg-indigo-500 text-white'}`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {content}
      </div>
    </div>
  );
};

export default Home;
