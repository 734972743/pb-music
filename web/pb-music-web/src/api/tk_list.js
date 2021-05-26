//塘口管理询问接口
import http from "@/utils/http";
export default {
  //塘口列表表格获取
  getTkList() {
    return http({
      url: "/Apond/dataList",
      method: "get"
    });
  },
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Apond/dataList?title=" +
        searchMap.title +
        "&name=" +
        searchMap.name +
        "&start_time=" +
        searchMap.start_time +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  //塘口新增的表单提交
  addTkMember(addtk_form) {
    return http({
      url: "/Apond/create",
      method: "post",
      data: {
        title: addtk_form.title,
        type: addtk_form.type,
        area_number: addtk_form.area_number,
        water_depth: addtk_form.water_depth,
        principal: addtk_form.principal,
        location: addtk_form.location,
        longitude: addtk_form.longitude,
        dimensionality: addtk_form.dimensionality
      }
    });
  },

  //已选取行的id为参数请求相应的data
  getoneTkdetail(id) {
    return http({
      url: `/Apond/view?id=` + id, //反单引号
      method: "get"
    });
  },
  gettheTkdetail(id) {
    return http({
      url: `/Apond/getOne?id=` + id, //反单引号
      method: "get"
    });
  },

  updateoneTkdetail(edditonetk_form) {
    return http({
      url: `/Apond/update`, //反单引号
      method: "post",
      data: {
        id: edditonetk_form.id,
        title: edditonetk_form.title,
        area_number: edditonetk_form.area_number,
        type: edditonetk_form.type,
        water_depth: edditonetk_form.water_depth,
        location: edditonetk_form.location,
        principal: edditonetk_form.principal
      }
    });
  },
  deletetheTkdetail(id) {
    return http({
      url: `/Apond/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  },
  getAllTkid() {
    return http({
      url: `/Apond/getAll`,
      method: "get"
    });
  }
};
