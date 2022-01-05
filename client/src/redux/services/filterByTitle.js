export const filterByTitle = (array, byTitle) => {
  array = array.filter(
    (e) => e.title.toLowerCase().search(byTitle.toLowerCase()) >= 0
  );
  return array;
};
