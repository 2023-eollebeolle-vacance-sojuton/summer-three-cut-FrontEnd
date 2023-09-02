export const getDateText = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dateFormat = `${year}년 ${month}월 ${day}일`;
  return dateFormat;
};
