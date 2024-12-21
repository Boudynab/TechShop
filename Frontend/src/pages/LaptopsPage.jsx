import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import OIP from '../assets/images/OIP.jpeg';
const LaptopsPage = () => {
    const { categoryName } = useParams();

    // Placeholder data
    const products = [
      { id: 1, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 2, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 3, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 4, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 5, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 6, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 7, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 8, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 9, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 10, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 11, name: 'Dell g15', price: '$100', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
      { id: 12, name: 'Dell g15', price: '$200', image: OIP , specifications: ["Processor: Intel Core i5-11300H", "RAM: 8GB DDR4", "Storage: 512GB SSD", "Display: 15.6 inches Full HD"]  },
  
    ];
  
    return (
      <div className="category-page">
        <h2>{categoryName} Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
export default LaptopsPage;
