export const cleanDuplicatesEntries = (arr) =>
  arr.filter((object, index) => {
    const _object = JSON.stringify(object);
    return (
      index ===
      arr.findIndex((obj) => {
        return JSON.stringify(obj) === _object;
      })
    );
  });

export const cleanDuplicatesUniqueIds = (arr) =>
  arr.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.unique_id === value.unique_id),
  );
