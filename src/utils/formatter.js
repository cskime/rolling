function formatDate(date, token = "-") {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}${token}${month}${token}${day}`;
}

export { formatDate };
