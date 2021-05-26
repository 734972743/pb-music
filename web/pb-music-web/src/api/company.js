import http from "@/utils/http";
export default {
  Search(searchMap) {
    return http({
      url: "/Asupervise/companyDetail?database=" + searchMap.database,
      method: "get"
    });
  }
};
