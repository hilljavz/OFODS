

export default {
    namespaced:true,
    state:{
        token:null,

    },
    getters:{

    },
    mutation:{

        SET_TOKEN(state,payload){
            state.token=payload
        }

    },
    actions:{

        login({commit},payload){
            console.log(payload)
        }

    }

}