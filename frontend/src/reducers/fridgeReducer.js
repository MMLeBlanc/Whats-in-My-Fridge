import { GET_FOOD, ADD_FOOD, DELETE_FOOD } from "../actions/types";

const initialState = {
  food: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        food: action.payload,
      };
    case ADD_FOOD:
      return {
        ...state,
        food: [action.payload, ...state.food],
      };
    case DELETE_FOOD:
      return {
        ...state,
        food: state.food.filer((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
}
