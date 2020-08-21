export const preventDefault = (fun: any) => (e: any) => {
  if (fun) {
    e.preventDefault();
    fun(e);
  }
};
