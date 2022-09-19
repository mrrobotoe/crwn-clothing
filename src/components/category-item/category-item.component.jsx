import { BackgroundImage, Body, DirectoryContainer } from "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default CategoryItem