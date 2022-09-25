<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6 col-sm-12">
        <form class="d-flex" @submit.prevent="getProfiles">
          <div class="input-group mb-5">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Search Profile..."
              aria-label="Search Profile..."
              v-model="search"
            />
            <button class="btn btn-secondary btn-lg" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="users.length > 0">
      <div class="row">
        <div
          v-for="user in users"
          :key="user.id"
          class="col-lg-3 col-md-6 col-sm-12"
        >
          <CardProfile
            :avatar="user.avatar_url"
            :name="user.login"
            :username="user.login"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardProfile from '../components/CardProfile.vue'
import * as dotenv from 'dotenv'
dotenv.config()

export default {
  components: {
    CardProfile,
  },
  data() {
    return {
      users: [],
      search: '',
    }
  },

  mounted() {},

  methods: {
    async getProfiles() {
      if (this.search !== '') {
        const URL = `https://api.github.com/search/users?q=${this.search}&per_page=100`

        // Pass bearer token to request to the API as many as you want -- no Rate Limit
        const headers = {
          Authorization: `Bearer ${process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        }

        try {
          // Asynchronous axios
          const { data } = await axios.get(URL, { headers })

          this.users = data.items // Store in users array

          this.search = '' // Empty input
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>
