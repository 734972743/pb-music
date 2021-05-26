import http from "@/utils/http.js";
export default {
  Search(searchMap, currentPage, pageSize) {
    return http({
      url:
        "/Asupervise/fileList?database=" +
        searchMap.database +
        "&code=" +
        searchMap.code +
        "&title=" +
        searchMap.title +
        "&product_id=" +
        searchMap.product_id +
        "&start_time=" +
        searchMap.start_time +
        "&page=" +
        currentPage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  addProductMember(addproduct_form) {
    return http({
      url: "/Afile/create",
      method: "post",
      data: {
        pond_id: addproduct_form.pond_id,
        principal: addproduct_form.principal,
        start_time: addproduct_form.start_time
      }
    });
  },
  getOneProduct(id) {
    return http({
      url: `/Afile/getOne?id=` + id,
      method: "get"
    });
  },
  updateProductMember(edditproduct_form) {
    return http({
      url: "/Afile/update",
      method: "post",
      data: {
        id: edditproduct_form.id,
        pond_id: edditproduct_form.pond_id,
        principal: edditproduct_form.principal,
        start_time: edditproduct_form.start_time
      }
    });
  },
  deleteProductMember(id) {
    return http({
      url: "/Afile/delete",
      method: "post",
      data: {
        id: id
      }
    });
  },
  getAllProductid() {
    return http({
      url: `/Afile/getAll`,
      method: "get"
    });
  },
  gettheCatchType(file_id) {
    return http({
      url: `/Afile/getProductType?file_id=` + file_id,
      method: "get"
    });
  }



};
