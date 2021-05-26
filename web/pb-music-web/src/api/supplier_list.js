import http from "@/utils/http";
export default {
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Asupplier/dataList?title=" +
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

  addSupplierMember(addSupplier_form) {
    return http({
      url: "/Asupplier/create",
      method: "post",
      data: {
        title: addSupplier_form.title,
        code: addSupplier_form.code,
        linkman: addSupplier_form.linkman,
        phone: addSupplier_form.phone,
        address: addSupplier_form.address,
        details: addSupplier_form.details
      }
    });
  },
  updateSupplierMember(edditSupplier_form) {
    return http({
      url: "/Asupplier/update",
      method: "post",
      data: {
        id: edditSupplier_form.id,
        title: edditSupplier_form.title,
        code: edditSupplier_form.code,
        linkman: edditSupplier_form.linkman,
        phone: edditSupplier_form.phone,
        address: edditSupplier_form.address,
        details: edditSupplier_form.details
      }
    });
  },
  getOneMember(id) {
    return http({
      url: `/Asupplier/getOne?id=` + id,
      method: "get"
    });
  },
  deleteOneMember(id) {
    return http({
      url: `/Asupplier/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  },
  getAllSupplier_id() {
    return http({
      url: `/Asupplier/getAll`,
      method: "get"
    });
  }
};
