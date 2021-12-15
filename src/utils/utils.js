const cleanDuplicatesEntries = (arr) =>
  arr.filter((object, index) => {
    const _object = JSON.stringify(object);
    return (
      index ===
      arr.findIndex((obj) => {
        return JSON.stringify(obj) === _object;
      })
    );
  });
export { cleanDuplicatesEntries };
