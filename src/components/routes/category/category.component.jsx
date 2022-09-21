import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategories } from '../../../store/categories/category.selector';

import ProductCard from '../../product-card/product-card.component';


const  Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategories)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  
  return (
    <Fragment>
      <h2 className='title'>{category.toLocaleUpperCase()}</h2>
      <div className='category-container'>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </Fragment>
  )
}

export default Category;