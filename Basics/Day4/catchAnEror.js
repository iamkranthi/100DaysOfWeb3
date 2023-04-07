function catchError(fn) {
  try {
    fn();
  } catch (ex) {}
}
