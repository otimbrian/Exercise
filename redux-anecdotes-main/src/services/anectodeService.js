import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnecdote = async (content) => {
  const newAnectode = { content, votes: 0 };
  const response = await axios.post(baseUrl, newAnectode);

  return response.data;
};

const voteAnectode = async (id, newAnecdote) => {
  return axios.put(`${baseUrl}/${id}`, newAnecdote);
};

const anectodeService = { getAll, createAnecdote, voteAnectode };
export default anectodeService;
