function formatDate(date, token = "-") {
  let _date;
  if (typeof date === 'string') {
    _date = new Date(date);
  } else {
    _date = date;
  }

  const year = _date.getFullYear();
  const month = `${_date.getMonth() + 1}`.padStart(2, "0");
  const day = `${_date.getDate()}`.padStart(2, "0");
  return `${year}${token}${month}${token}${day}`;
}

export { formatDate };
