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

    <!-- Profile -->
    <div class="row justify-content-center mt-3 mb-5">
      <div class="col-lg-4">
        <img
          class="img-fluid"
          src="https://avatars.githubusercontent.com/u/47776945?v=4"
          alt="Github Profile Photo"
        />
      </div>

      <div class="col-lg-8">
        <div class="mb-3">
          <h5>Robert Miras</h5>
          <span class="badge bg-success">User</span>
          <span class="badge bg-info text-white ms-1">Hireable</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
          dolorem aspernatur, obcaecati nesciunt accusantium sed libero quos!
          Maxime iste distinctio officiis voluptatem earum doloremque ducimus!
          Nemo ratione rerum repellat.
        </p>

        <router-link class="btn btn-outline-light text-uppercase mb-3" to="/">
          Visit Profile <i class="fab fa-github"></i>
        </router-link>

        <div class="row">
          <div class="col-lg-4">
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <p class="text-muted small m-0 p-0">Location</p>
                <p class="fw-bold m-0 p-0 small">Cavinti Laguna</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <p class="text-muted small m-0 p-0">Email</p>
                <p class="fw-bold m-0 p-0 small">mr@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <p class="text-muted small m-0 p-0">Website</p>
                <p class="fw-bold m-0 p-0 small">website.com.ph</p>
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
                <p class="fw-bold m-0 p-0 card-count">45678</p>
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
                <p class="fw-bold m-0 p-0 card-count">45678</p>
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
                <p class="fw-bold m-0 p-0 card-count">35</p>
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
                <p class="fw-bold m-0 p-0 card-count">35</p>
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
          title="App Name"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
    <!-- End Repos -->
  </div>
</template>

<script>
import CardRepos from '../components/CardRepos.vue';
export default {
  components: {
    CardRepos,
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
</style>
