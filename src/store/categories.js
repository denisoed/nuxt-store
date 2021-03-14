import graphql from '@/graphql';
import { GET_CATEGORIES } from '@/graphql/types';

export const state = () => ({
  loaded: false,
  list: []
});

export const mutations = {
  SET_LIST(state, data) {
    state.list = data;
  },
  SET_LOADED_STATUS(state, status) {
    state.loaded = status;
  }
};

export const actions = {
  async getCategories({commit}) {
    try {
      const { data } = await graphql(GET_CATEGORIES);
      commit('SET_LIST', data.allCategories);
      commit('SET_LOADED_STATUS', true);
    } catch(err) {
      if (err) throw err;
    }
  }
};

export const getters = {
  categoriesList(state) {
    return state.list;
  }
};
