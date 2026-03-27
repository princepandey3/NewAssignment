const apiUrl = import.meta.env.VITE_API_URL;

const fetchData = async () => {
  const response = await fetch(`${apiUrl}/api/endpoint`);
  const data = await response.json();
  console.log(data);
};

export { fetchData };
