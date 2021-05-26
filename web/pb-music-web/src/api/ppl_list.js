import http from "@/utils/http";
export default {
  //请求人员管理的接口
  getPplList() {
    return http({
      url: "/Auser/dataList",
      method: "get"
    });
  },

  //根据条件来搜索,条件为空的获取所有信息
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Auser/dataList?nickname=" +
        searchMap.nickname +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  //添加人员管理中的负责人的请求
  addPplMember(addppl_form) {
    return http({
      url: "/Auser/create",
      method: "post",
      data: {
        nickname: addppl_form.nickname,
        phone: addppl_form.phone
      }
    });
  },
  getOnePpl(id) {
    return http({
      url: `/Auser/getOne?id=` + id,
      method: "get"
    });
  },
  updatePplMember(edditppl_form) {
    return http({
      url: "/Auser/update",
      method: "post",
      data: {
        id: edditppl_form.id,
        nickname: edditppl_form.nickname,
        phone: edditppl_form.phone
      }
    });
  },
  deletePplMember(id) {
    return http({
      url: "/Auser/delete",
      method: "post",
      data: {
        id: id
      }
    });
  },
  getAllPplid() {
    return http({
      url: `/Auser/getAll`,
      method: "get"
    });
  }
};
