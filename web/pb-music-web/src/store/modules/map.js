const map = {

     state: {
        map:{},   //地图对象
    },

    mutations:{
        SET_MAP(state,map){
            state.map = map;
        }
    },

    actions:{
        updateMap({commit}, map){
            commit("SET_MAP", map);
        }
    }
}

export default map;