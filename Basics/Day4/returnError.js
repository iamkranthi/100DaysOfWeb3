function catchError(fn) {
  try {
    fn();
  } catch (ex) {
    return ex;
  }
  return false;
}
