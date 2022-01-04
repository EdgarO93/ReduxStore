import React, { createContext, useContext } from "react";
import reducer from './reducers'
import { Provider} from 'react-redux'
import { createStore } from 'redux';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

let store = createStore(reducer,
  {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''}

);
const StoreProvider = (props) => {

  return <Provider store={store} {...props}/>
}


// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };
const StoreContext = createContext();

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
