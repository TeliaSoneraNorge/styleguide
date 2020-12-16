const dateToString = (date: Date) => {
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month = date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear().toString().padStart(4, '0');

  return [year, month, day].join('-');
};

export default { dateToString };
