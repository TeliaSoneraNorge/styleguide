export const preventDefault = (fun) => (e) => {
    if (fun) {
        e.preventDefault();
        fun(e);
    }
};