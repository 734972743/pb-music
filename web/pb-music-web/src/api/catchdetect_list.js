import http from "@/utils/http.js";
export default {
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Asupervise/catchList?product_code=" +
        searchMap.product_code +
        "&title=" +
        searchMap.title +
        "&code=" +
        searchMap.code +
        "&database=" +
        searchMap.database +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  addCatchDetectMember(addproduct_form) {
    return http({
      url: "/Acatch_log/create",
      method: "post",
      data: {
        file_id: addproduct_form.file_id,
        production_time: addproduct_form.production_time,
        principal: addproduct_form.principal,
        detection_time: addproduct_form.detection_time,
        detection_result: addproduct_form.detection_result,
        odd_number: addproduct_form.odd_number,
        resource_ids: addproduct_form.resource_ids,
        remark: addproduct_form.remark,
        number_info: addproduct_form.number_info
      }
    });
  },
  getOneCatchDetect(id) {
    return http({
      url: `/Acatch_log/getOne?id=` + id,
      method: "get"
    });
  },
  updateCatchDetectMember(edditproduct_form) {
    return http({
      url: "/Acatch_log/update",
      method: "post",
      data: {
        id: edditproduct_form.id,
        file_id: edditproduct_form.file_id,
        production_time: edditproduct_form.production_time,
        principal: edditproduct_form.principal,
        detection_time: edditproduct_form.detection_time,
        detection_result: edditproduct_form.detection_result,
        odd_number: edditproduct_form.odd_number,
        resource_ids: edditproduct_form.resource_ids,
        remark: edditproduct_form.remark,
        number_info: edditproduct_form.number_info
      }
    });
  },
  deleteCatchDetectMember(id) {
  return http({
    url: "/Acatch_log/delete",
    method: "post",
      data: {
        id: id
      }
    });
  }
};
