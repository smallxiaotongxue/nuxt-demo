import dayjs from "dayjs";
import axios from "axios";

export const state = () => ({
  visits: [],
	authUser: null,
	counter: 0
});

export const mutations = {
	increment (state) {
		state.counter++
	},
  ADD_VISIT (state, path) {
    state.visits.push({
      path,
      date: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
    })
  },
	SET_USER (state, user) {
		state.authUser = user
	}
};

export const actions = {
	// nuxtServerInit is called by Nuxt.js before server-rendering every page
	nuxtServerInit ({ commit }, { req }) {
		if (req.session && req.session.authUser) {
			commit('SET_USER', req.session.authUser)
		}
	},
	async login ({ commit }, { username, password }) {
		try {
			const { data } = await axios.post('/api/login', { username, password })
			commit('SET_USER', data)
		} catch (error) {
			if (error.response && error.response.status === 401) {
				throw new Error('Bad credentials')
			}
			throw error
		}
	},

	async logout ({ commit }) {
		await axios.post('/api/logout')
		commit('SET_USER', null)
	}

}


