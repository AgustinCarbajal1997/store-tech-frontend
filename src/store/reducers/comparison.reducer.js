import {
  ADD_COMPARISON,
  DELETE_COMPARISON,
} from "../actions/comparison.action";

const INITIAL_STATE = {
  category: null,
  products: [],
};

const ComparisonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMPARISON:
      if (state.category && action.payload.category !== state.category)
        return state;
      if (!state.category && !state.products.length)
        return {
          ...state,
          category: action.payload.category,
          products: [action.payload.item],
        };
      let newComparison;
      const isExisted = state.products.find(
        (item) => item === action.payload.item
      );
      if (!isExisted && state.products.length >= 4) return state;
      if (!isExisted)
        return {
          ...state,
          products: [...state.products, action.payload.item],
        };
      if (isExisted && state.products.length === 1)
        return {
          ...state,
          category: null,
          products: [],
        };
      if (isExisted) {
        newComparison = state.products.filter(
          (item) => item !== action.payload.item
        );
        return {
          ...state,
          products: newComparison,
        };
      }
      isExisted
        ? (newComparison = state.products.filter(
            (item) => item !== action.payload.item
          ))
        : (newComparison = [...state.products, action.payload.item]);
      return {
        ...state,
        products: newComparison,
      };
    case DELETE_COMPARISON:
      return {
        ...state,
        category:null,
        products: [],
      };
    default:
      return state;
  }
};

export default ComparisonReducer;
