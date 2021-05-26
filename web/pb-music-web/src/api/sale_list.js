import http from "@/utils/http";
export default {
  Search(searchMap, currentpage, pageSize) {
    return http({
      url:
        "/Asupervise/sellList?title=" +
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

  addSaleMember(addSale_form) {
    return http({
      url: "/Asell_log/create",
      method: "post",
      data: {
        product_id: addSale_form.product_id,
        sell_number: addSale_form.sell_number,
        sell_time: addSale_form.sell_time,
        sell_object: addSale_form.sell_object,
        sell_money: addSale_form.sell_money,
        principal: addSale_form.principal,
        catch_id: addSale_form.catch_id
      }
    });
  },
  deletetheSaledetail(id) {
    return http({
      url: `/Asell_log/delete`, //反单引号
      method: "post",
      data: {
        id: id
      }
    });
  }
};
