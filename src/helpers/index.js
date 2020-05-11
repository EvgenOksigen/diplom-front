export const API_KEY = "9ea6825b8b5dae9d2dafb3fa6056126c";

export const getUrlParam = param => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
};
