<template>
  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
      <div class="d-flex">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="Github Profile Photo"
          width="40"
          height="40"
          class="round"
        />
        <div class="ms-2">
          <p class="text-white fw-bold m-0 p-0">bradtraversy</p>
          <router-link
            class="text-muted m-0 p-0 small text-decoration-none"
            :to="{ name: 'Profile', params: { username: 'mirasrobert' } }"
          >
            View Profile
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.round {
  border-radius: 50%;
}
</style>
