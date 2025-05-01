import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const productList = [
  {
    id: 1,
    name: "Laptop",
    price: 200,
    description: "High-quality Laptop by from ASUS.",
    image: "https://i.pinimg.com/736x/d6/19/85/d61985c4d31ef6aa76655f17a047f245.jpg"
  },
  {
    id: 2,
    name: "Phone",
    price: 100,
    description: "High quality phone by Apple.",
    image: "https://i.pinimg.com/736x/2f/ce/ea/2fceeab54b351dff012dfc8ea1dab1bd.jpg"
  },
  {
    id: 3,
    name: "Tablet",
    price: 150,
    description: "High quality Tablet by Xiaomi",
    image: "https://i.pinimg.com/736x/65/78/ed/6578ede4cffa779a7bda0635a61d89fc.jpg"
  },
];

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productList.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-6 text-red-500">Item not found</div>;

  return (
    <div className="w-[500px] h- mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-green-600">${product.price}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
