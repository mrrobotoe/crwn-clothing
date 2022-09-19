import CategoryItem from "../category-item/category-item.component";
import './categories.styles.scss'
import { categories } from "../../data";

const Directory = () => {
  return (
    <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  )
}

export default Directory;