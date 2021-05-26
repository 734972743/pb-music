import http from "@/utils/http";
export default {
  Search_CodeStandard(title) {
    return http({
      url:
        "/Aproduct/titleSearch" +
        title,
      method: "get"
    });
  },
  Search_InputStock(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Aproduct_warehouse/dataList?title=" +
        searchMap.title +
        "&type=" +
        searchMap.type +
        "&name=" +
        searchMap.name +
        "&purchase_time=" +
        searchMap.purchase_time +
        "&action=" +
        searchMap.action +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  Search_Usage(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Abreed_log/dataList?title=" +
        searchMap.title +
        "&start_time=" +
        searchMap.create_time +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  Search_InputType(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Aproduct/dataList?title=" +
        searchMap.title +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },
  Search_Stats(currentpage, pageSize) {
    return http({
      url:
        "Aproduct/statistics" +
        "&page=" +
        currentpage +
        "&pageSize=" +
        pageSize,
      method: "get"
    });
  },

  addInputStockMember(addInputStock_form) {
    return http({
      url: "/Aproduct_warehouse/create",
      method: "post",
      data: {
        product_id: addInputStock_form.product_id,
        supplier_id: addInputStock_form.supplier_id,
        production_time: addInputStock_form.production_time,
        purchase_time: addInputStock_form.purchase_time,
        purchase_number: addInputStock_form.purchase_number,
        purchase_money: addInputStock_form.purchase_money,
        remark: addInputStock_form.remark,
        principal: addInputStock_form.principal
      }
    });
  },
  addInputTypeMember(addInputStock_form) {
    return http({
      url: "/Aproduct/create",
      method: "post",
      data: {
        title: addInputStock_form.title,
        type: addInputStock_form.type,
        code_standard: addInputStock_form.code_standard,
        remark: addInputStock_form.remark
      }
    });
  },
  updateInputTypeMember(addInputStock_form) {
    return http({
      url: "/Aproduct/update",
      method: "post",
      data: {
        id: addInputStock_form.id,
        title: addInputStock_form.title,
        type: addInputStock_form.type,
        code_standard: addInputStock_form.code_standard,
        remark: addInputStock_form.remark
      }
    });
  },
  updateInputStockMember(edditinputstock_form) {
    return http({
      url: "/Aproduct/update",
      method: "post",
      data: {
        id: edditinputstock_form.id,
        product_id: edditinputstock_form.product_id,
        supplier_id: edditinputstock_form.supplier_id,
        production_time: edditinputstock_form.production_time,
        purchase_time: edditinputstock_form.purchase_time,
        purchase_number: edditinputstock_form.purchase_number,
        purchase_money: edditinputstock_form.purchase_money,
        principal: edditinputstock_form.principal,
        remark: edditinputstock_form.remark
      }
    });
  },
  getOneMember(id) {
    return http({
      url: `/Aproduct_warehouse/getOne?id=` + id,
      method: "get"
    });
  },
  getOneInputTypeMember(id) {
    return http({
      url: `/Aproduct/find_list?id=` + id,
      method: "get"
    });
  },
  deletetheInputStockdetail(id) {
    return http({
      url: `/Aproduct_warehouse/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  },
  deletetheInputTypedetail(id) {
    return http({
      url: `/Aproduct/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  },
  getAlldefaultProduct(type) {
    return http({
      url: `/Aproduct_warehouse/getAll?type=` + type,
      method: "get"
    });
  },
  getAllProduct_id_id(type) {
    return http({
      url: `/Aproduct_warehouse/getInventory?type=` + type,
      method: "get"
    });
  }
};
