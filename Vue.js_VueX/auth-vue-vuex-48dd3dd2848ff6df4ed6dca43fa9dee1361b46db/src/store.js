import Vuex from 'vuex';
import Vue from 'vue';
import http from '@/http';

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
};

const mutations = {
    DEFINIR_USUARIO_LOGADO (state, { token, usuario }) {
        state.usuario = usuario,
        state.token = token
    },
    DESLOGAR_USUARIO (state) {
        state.token = null
        state.usuario = {}
    }
};

const actions = {
    efetuarLogin ({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(res => {
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: res.data.access_token,
                        usuario: res.data.user
                    })
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }
};

const getters = {
    usuarioLogado: state => Boolean(state.token)
};

export default new Vuex.Store({
    state: estado,
    mutations,
    actions,
    getters
});