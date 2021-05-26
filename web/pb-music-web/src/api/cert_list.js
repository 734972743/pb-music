import http from "@/utils/http";
export default {
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Asupervise/qualificationList?title=" +
        searchMap.title +
        "&database=" +
        searchMap.database +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },


  deleteOneMember(id) {
    return http({
      url: `/Aqualification/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  },


  getDetailById(id){
    return http({
      url: `/Aqualification/view?id=${id}`, //反单引号
      method: "get",
    });
  }
};
