import http from "@/utils/http";
export default {
    //数字栏及天气
  GetData() {
    return http({
      url: "formula_screen/formulaList",
      method: "get"
    });
  },
  //菜品列表
  GetFoodList(currentpage, page) {
    return http({
      url: `formula_screen/formulaFoodList?page=${currentpage}&pg_count=${page}`,
      method: "get"
    });
  },
  //type:1:每周检测项目分析,2:每周检测样品分析,3:每周单品检测合格率分析,4:每周检测批次统计
  GetChartData(query) {
    return http({
      url: `formula_screen/dataAnalysis?type=${query}`,
      method: "get"
    });
  },
  //今日检测信息
  GetTestTableData(currentpage, page) {
    return http({
      url: `formula_screen/formulaTestList?page=${currentpage}&pg_count=${page}`,
      method: "get"
    });
  }
};
