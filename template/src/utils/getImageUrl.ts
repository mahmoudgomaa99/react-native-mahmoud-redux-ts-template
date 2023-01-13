export default (res: string) => {
  if (res.includes('http://')) {
    return res;
  } else {
    return 'http:// get it from backend' + res;
  }
};
