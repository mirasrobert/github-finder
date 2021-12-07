<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <router-link
          class="text-white fw-bold m-0 p-0 text-decoration-none text-uppercase back"
          :to="{ name: 'Home' }"
        >
          <i class="fas fa-chevron-left"></i>
          Back to search
        </router-link>
      </div>
    </div>

    <div v-if="loading && !repos">
      <div class="row justify-content-center mt-3 mb-5">
        <div class="col-12 d-flex justify-content-center">
          <Loader />
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Profile -->
      <div class="row justify-content-center mt-3 mb-5">
        <div class="col-lg-4">
          <img
            class="img-fluid mb-3 mb-lg-0"
            :src="user.avatar_url"
            alt="Github Profile Photo"
          />
        </div>

        <div class="col-lg-8">
          <div class="mb-3">
            <h5>{{ user.name }}</h5>
            <span class="badge bg-success">{{ user.type }}</span>
            <span class="badge bg-info text-white ms-1" v-if="user.hireable"
              >Hireable</span
            >
          </div>

          <p>
            {{ user.bio }}
          </p>

          <a
            class="btn btn-outline-light text-uppercase mb-3"
            :href="user.html_url"
          >
            Visit Profile <i class="fab fa-github"></i>
          </a>

          <div class="row">
            <div class="col-lg-4">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <p class="text-muted small m-0 p-0">Location</p>
                  <p class="fw-bold m-0 p-0 small">{{ user.location }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <p class="text-muted small m-0 p-0">Email</p>
                  <p class="fw-bold m-0 p-0 smaller">{{ user.email }}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <p class="text-muted small m-0 p-0">Website</p>
                  <p class="fw-bold m-0 p-0 font-xs">{{ user.blog }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Profile -->

      <!-- Followers Card -->
      <div class="row mb-3">
        <div class="col-lg-3 col-md-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="text-muted small m-0 p-0">Followers</p>
                  <p class="fw-bold m-0 p-0 card-count">{{ user.followers }}</p>
                </div>
                <div>
                  <i class="fas fa-users fa-2x blue"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="text-muted small m-0 p-0">Following</p>
                  <p class="fw-bold m-0 p-0 card-count">{{ user.following }}</p>
                </div>
                <div>
                  <i class="fas fa-user-friends fa-2x blue"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="text-muted small m-0 p-0">Public Repos</p>
                  <p class="fw-bold m-0 p-0 card-count">
                    {{ user.public_repos }}
                  </p>
                </div>
                <div>
                  <i class="fas fa-box fa-2x blue"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="text-muted small m-0 p-0">Public Gists</p>
                  <p class="fw-bold m-0 p-0 card-count">
                    {{ user.public_gists }}
                  </p>
                </div>
                <div>
                  <i class="fas fa-store fa-2x blue"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End cards -->

      <!-- Repos -->
      <div class="row">
        <div class="col">
          <h5 class="mb-3 fw-bold">Latest Repositories</h5>
          <CardRepos
            v-for="repo in repos"
            :title="repo.name"
            :description="repo.description"
            :watchers="repo.watchers_count"
            :stargazers="repo.stargazers_count"
            :open_issues="repo.open_issues_count"
            :forks="repo.forks_count"
            :key="repo.id"
          />
        </div>
      </div>
      <!-- End Repos -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardRepos from '../components/CardRepos.vue';
import Loader from '../components/Loader.vue';

export default {
  components: {
    CardRepos,
    Loader,
  },

  data() {
    return {
      username: this.$route.params.username, // Route parameter
      user: null,
      repos: null,
      loading: true,
    };
  },

  mounted() {
    this.getSingleProfile();
    this.getLatestRepos();
  },
  methods: {
    async getSingleProfile() {
      const URL = `https://api.github.com/users/${this.username}`;

      // Pass bearer token to request to the API as many as you want -- no Rate Limit
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      };

      try {
        // Asynchronous axioS
        const { data } = await axios.get(URL, { headers });

        this.user = data;

        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async getLatestRepos() {
      const URL = `https://api.github.com/users/${this.username}/repos?per_page=8`;

      // Pass bearer token to request to the API as many as you want -- no Rate Limit
      const headers = {
        Authorization: `Bearer ${process.env.VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      };

      try {
        // Asynchronous axioS
        const { data } = await axios.get(URL, { headers });

        this.repos = data;

        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.back:hover {
  color: #d9d9d9 !important;
}

.card-count {
  font-size: 1.5rem;
}

.blue {
  color: #0099ff !important;
}

.smaller {
  font-size: 0.75rem;
}

.font-xs {
  font-size: 0.6875rem;
}
</style>
