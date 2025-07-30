import { saveData } from "./storageManager";

const showLoading = () => {
  saveData("LOADING", "true");
};

const hideLoading = () => {
  saveData("LOADING", "false");
};

export { showLoading, hideLoading };
