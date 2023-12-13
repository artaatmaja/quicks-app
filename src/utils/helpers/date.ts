export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const calculateDaysLeft = (isoDateString: string): string => {
  const currentDate = new Date();
  const dueDate = new Date(isoDateString);
  const difference = dueDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));
  return daysLeft > 1 ? `${daysLeft} Days left` : "1 Day left";
};

export const getCurrentTimeFormatted = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
