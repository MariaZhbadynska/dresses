import http from "./httpCommon";

const getAllDresses = async () => {
  const response = await http.get("/dresses")
  return response.data
};
const getOneDress = async (id) => {
  const response = await http.get(`/dresses/${id}`)
  return response.data
};

export { getAllDresses, getOneDress};
