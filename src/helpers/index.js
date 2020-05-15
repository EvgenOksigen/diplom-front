export const API_KEY = "9ea6825b8b5dae9d2dafb3fa6056126c";

export const getUrlParam = param => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
};

export const randomize = arr => {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
