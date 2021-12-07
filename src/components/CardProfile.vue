<template>
  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
      <div class="d-flex">
        <img
          :src="avatar"
          alt="Github Profile Photo"
          width="40"
          height="40"
          class="round"
        />
        <div class="ms-2">
          <p class="text-white fw-bold m-0 p-0">{{ name }}</p>
          <div v-if="usn">
            <router-link
              class="text-muted m-0 p-0 small text-decoration-none"
              :to="{ name: 'Profile', params: { username: usn } }"
            >
              View Profile
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['avatar', 'name', 'username'],
  data() {
    return {
      usn: '',
    };
  },
  mounted() {
    this.usn = this.username;
  },
};
</script>

<style scoped>
.round {
  border-radius: 50%;
}
</style>
