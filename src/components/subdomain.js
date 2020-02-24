const sub = () => {
  const url = window.location.href;
  const parts = url.split('.');
  const subdomain = parts[0];
  console.log(subdomain)
  return subdomain;
};

export default sub;
