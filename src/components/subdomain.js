const sub = () =>{
  const url = window.location.href;
  const parts = url.split('.');
  const sub = parts[0];
  return sub
}

export default sub;