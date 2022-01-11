export default async () => {
  const response = await fetch("https://api.github.com/users/Drb-Diego/repos");
  const json = await response.json();
  return json;
};
