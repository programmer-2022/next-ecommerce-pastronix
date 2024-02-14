export const truncateText = (text: string) =>
  text.length < 25 ? text : `${text.substring(0, 25)}...`;
