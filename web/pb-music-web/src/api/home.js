import http from "@/utils/http";
export default {
  Search_HomeDetail(database) {
    return http({
      url: "/Asupervise/CompanyList?database=" + database,
      method: "get"
    });
  },
  Search_Home() {
    return http({
      url: "/Asupervise/superviseList",
      method: "get"
    });
  }
};
