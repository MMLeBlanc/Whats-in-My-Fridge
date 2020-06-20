import axios from "axios";
import { GET_FOOD, ADD_FOOD, DELETE_FOOD } from "./types";

export const getFood = () => (dispatch) => {
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_FOOD,
      payload: res.data,
    })
  );
};

export const addFood = (foodItem) => (dispatch) => {
  axios.post("/api/items", foodItem).then((res) =>
    dispatch({
      type: ADD_FOOD,
      payload: res.data,
    })
  );
};

export const deleteFood = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_FOOD,
      payload: id,
    })
  );
};
