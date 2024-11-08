import { useContext } from 'react';
import ProductContext from '../../../store/product-context';
import ProductList from '../Home/ProductList';

const RecentlyViewed = () => {
  const { recentlyViewed } = useContext(ProductContext);

  return (
    <div>
      <h2 style={{ textAlign: "center", }} >Recently Viewed</h2>
      <ProductList productData={recentlyViewed} />
    </div>
  );
};

export default RecentlyViewed;
