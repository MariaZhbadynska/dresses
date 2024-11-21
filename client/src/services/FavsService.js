import http from "./httpCommon";

const getAllFavs = async () => {
  const response = await http.get("/favs");
  console.log('API response:', response.data); 
  return response.data;
};
const getOneFav = async (id) => {
  const response = await http.get(`/favs/${id}`);
  return response.data;
};
const addFavv = async (dress) => {
  const response = await http.post(`/favs`, dress);
  return response.data;
};
const deleteFav = async (id) => {
  const response = await http.delete(`/favs/${id}`);
  return response.data;
};

export { getAllFavs, getOneFav, addFavv, deleteFav };
