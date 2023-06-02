import axios from "axios";

export default function useService() {
  function getRequest(url) {
    return new Promise((resovle, reject) => {
      axios({
        method: "get",
        url: url,
      })
        .then(function (response) {
          resovle(response.data);
        })
        .catch(function (response) {
          reject(response.data.error);
        });
    });
  }
  return {
    getRequest,
  };
}
