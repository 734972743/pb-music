import http from "@/utils/http";
export default {
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Apack_log/dataList?title=" +
        searchMap.title +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },

  addPackageMember(addPackage_form) {
    return http({
      url: "/Apack_log/create",
      method: "post",
      data: {
        product_id: addPackage_form.product_id,
        usage_amount: addPackage_form.usage_amount,
        specification: addPackage_form.specification,
        pack_number: addPackage_form.pack_number,
        pack_time: addPackage_form.pack_time,
        principal: addPackage_form.principal,
        catch_id: addPackage_form.catch_id
      }
    });
  },
  deletethePackagedetail(id) {
    return http({
      url: `/Apack_log/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  }
};
