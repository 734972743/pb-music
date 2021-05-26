import http from "@/utils/http.js";
export default {
  Search_list(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Ainventory/dataList?title=" +
        searchMap.title +
        "&code=" +
        searchMap.code +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  Search_data(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Ainventory/statistics?title=" +
        searchMap.title +
        "&code=" +
        searchMap.code +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  }
};
