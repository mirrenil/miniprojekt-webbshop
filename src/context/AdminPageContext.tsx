import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../components/hooks/useLocalStorageState";
import { ProductData, productData } from "../ProductData";
interface AdminData extends ProductData {
}

interface ContextValue {
  products: ProductData[];
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
  isEdit: boolean
  saveProduct: (product: ProductData) => void;
  addProduct: (product: ProductData) => void;
  removeProduct: (product: ProductData) => void;
  inputChangeHandler: (event, product: ProductData) => void;
  handleSave: (e) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: () => undefined,
    setEdit: () => undefined,
    isEdit: false,
    saveProduct: (product) => undefined,
    removeProduct: (product) => undefined,
    inputChangeHandler: (product) => undefined,
    handleSave: () => undefined,
});

const ProductProvider = (props) => { 
    const [products, setProducts] = useLocalStorageState(productData, "adminLS");
    const [isEdit, setEdit] = useState(false);

    const handleSave = (product: ProductData) => {
      //addProduct(newProduct);
    }

   const addProduct = (product: ProductData) => {
       // tar emot en  ny produkt
        //setProducts(newProduct);
   }
  
    const removeProduct = (productToBeRemoved: ProductData) => {
        const updatedProductList = products.filter((product) => productToBeRemoved.id !== product.id)  
        setProducts(updatedProductList);
    };

    const saveProduct = (editedProduct: ProductData) => {
        // need e.target.value onChange or something
        // filter just shows the product which was edited

        let productListToBeSaved = [...products]

        const editedProductList = products.map((item) => {
            if(editedProduct.id === item.id) { return editedProduct }
            return item
        });
        setProducts(editedProductList)
        setEdit(false);
        
        // const filter = editedProductList.filter((element) => { 
        // return element.id === productData.forEach((element) => element.id);})
        // console.log("filter: " + filter);
    }
    
        //let productToEdit = props.product
        const inputChangeHandler = (event, productToEdit: ProductData) => {
        products.map((product) => (product.id === productToEdit.id)); 
        console.log(products)
    }
        
    return (
        <ProductContext.Provider
            value={{
            products,
            setEdit,
            addProduct,
            isEdit,
            saveProduct,
            removeProduct,
            inputChangeHandler,
            handleSave,
            }}
        >
        {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
export const useAdmin = () => useContext(ProductContext);


