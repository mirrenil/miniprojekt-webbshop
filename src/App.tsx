import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import CheckoutPage from "./components/CheckoutPage";
import DetailPage from "./components/DetailPage";
import EmptyPage from "./components/EmptyPage";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ProductPage from "./components/ProductPage";
import CartProvider from "./context/CartContextProvider";
import { productData } from "./ProductData";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductPage products={productData} />} />
            <Route path="/textiles" element={<EmptyPage page="Textiles" />} />
            <Route path="/lighting" element={<EmptyPage page="Lighting" />} />
            <Route
              path="/decoration"
              element={<EmptyPage page="Decoration" />}
            />
            <Route
              path="/inspiration"
              element={<EmptyPage page="Inspiration" />}
            />
            <Route path="/detail/:id" element={<DetailPage />} />
            {/* added a quick fix in AdminPage component for now */}
            <Route path="/admin" element={<AdminPage products={[]} />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
