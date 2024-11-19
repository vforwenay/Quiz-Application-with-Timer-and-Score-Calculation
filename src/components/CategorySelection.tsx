
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "js_basics", name: "JavaScript Basics" },
  { id: "react_basics", name: "React Basics" },
];

interface CategorySelectionProps {
  onCategorySelect: (categoryId: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onCategorySelect }) => {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: string) => {
    onCategorySelect(categoryId);  
    navigate(`/quiz/${categoryId}`); 
  };

  return (
    <div className="category-selection">
      <h1>Select a Category</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className="category-item"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;
