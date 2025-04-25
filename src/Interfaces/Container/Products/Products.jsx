import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../../../Usecases/Slices/ProductSlice';
import { debounce } from 'lodash';
import starfill from '../../../Assets/Logo/star.png';
import star from '../../../Assets/Logo/star (1).png';
import Poster from '../../Components/Poster';
import spinner from '../../../Assets/Logo/circle-9360_256.gif'
import ProductNotFound from './ProductNotFound';
import { fetchCategories } from '../../../Usecases/Slices/CategorySlice';

const Products = () => {
  const [searchParam, setSearchParam] = useSearchParams({ skip: 0, limit: 12 });
  const [searchQuery, setSearchQuery] = useState('');
  const skip = parseInt(searchParam.get('skip')) || 0;
  const limit = parseInt(searchParam.get('limit')) || 0;
  const category = searchParam.get('category') || '';
  const q = searchParam.get('q') || '';
  const dispatch = useDispatch();
  const products = useSelector(state => state.myProducts);
  const categories = useSelector(state => state.myCategory.items);
  const allProducts = products.items.products;
  useEffect(() => {
    dispatch(fetchProducts({ skip, limit, category, q }))
    dispatch(fetchCategories())

  }, [skip, limit, q, category, dispatch])


  const handleMove = (count) => {
    setSearchParam((preSearch) => {
      preSearch.set('skip', Math.max(skip + count, 0));
      return preSearch;
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const debouncedSetSearchParam = useCallback(
    debounce((preParams) => {
      setSearchParam(preParams);
    }, 1000),
    []
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSetSearchParam((preParams) => {
      preParams.set('q', e.target.value);
      preParams.delete('category');
      preParams.set('skip', 0);
      return preParams;
    });
  };
  return (

    <>

      <div className="bg-violet-200 rounded-lg my-4 min-h-[85vh]  md:w-[90vw] mx-auto container p-6">
        <div>
          <Poster name="Top" info="Products" />
        </div>

        <div className="relative mt-2 rounded-md flex flex-col md:flex-row items-center gap-8 mb-4">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="IPhone"
          />
          <select className="border p-2" onChange={(e) => {
            setSearchQuery('');
            setSearchParam((preParams) => {
              preParams.set('skip', 0)
              preParams.delete('q');
              preParams.set('category', e.target.value)
              return preParams;
            })
          }}>
            <option>Select category</option>
            {categories?.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            ))}
          </select>
        </div>
        {products.status == 'loading' ? <div className=' text-center flex items-center justify-center'><img src={spinner} alt='spinner' className='text-center w-6' /></div> : null}
        {products.status == 'failed' ? <h1>There is an issue while fetching data....</h1> : null}
        {allProducts == '' ? <ProductNotFound title='Search Not Found Try Another Category....' /> : null}
        {products.status == 'succeeded' &&
          <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {allProducts?.map((product) => (

              <div data-aos="flip-up" key={product.id} className=" bg-white border border-purple-950  rounded-lg group overflow-hidden cursor-pointer relative z-40 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <h3 className="text-sm text-gray-700 ">
                  <Link to={`/products/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0 " />
                  </Link>
                </h3>
                <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <img src={product.thumbnail} alt={product.tittle}
                    className="h-full w-full object-contain" />
                </div>

                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h4 className="text-lg text-purple-950 font-bold mt-2">{product.price} $</h4>
                    <h3 className="text-base font-bold text-gray-800">{product.title}</h3>
                  </div>

                  <div className="flex justify-center space-x-1 mt-4">
                    <img src={starfill} className='w-6' alt="" />
                    <img src={starfill} className='w-6' alt="" />
                    <img src={starfill} className='w-6' alt="" />
                    <img src={starfill} className='w-6' alt="" />
                    <img src={star} className='w-6' alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        <div className="flex gap-2 mt-12">
          <button
            disabled={skip < limit}
            className="bg-blue-500 px-4 py-1 text-white rounded"
            onClick={() => { handleMove(-limit) }}>
            Prev
          </button>
          <button
            disabled={skip + limit >= products?.items?.total}
            className="bg-purple-500 px-4 py-1 text-white rounded"
            onClick={() => { handleMove(limit) }}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Products