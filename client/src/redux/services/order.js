export const order = (array, byOrder) => {
  if (byOrder === "orderAsc") {
    array = array.sort((a, b) => {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  } else if (byOrder === "orderDes") {
    array = array.sort((a, b) => {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  } else if (byOrder === "orderHigScore") {
    array = array.sort((b, a) => {
      if (a.spoonacularScore - b.spoonacularScore !== 0) {
        return a.spoonacularScore - b.spoonacularScore;
      } else {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
  } else if (byOrder === "orderSmaScore") {
    array = array.sort((b, a) => {
      if (b.spoonacularScore - a.spoonacularScore !== 0) {
        return b.spoonacularScore - a.spoonacularScore;
      } else {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }
    });
  }

  return array;
};
