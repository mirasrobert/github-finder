<template>
  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
      <router-link
        class="fw-bold title text-decoration-none"
        :to="{ name: 'Home' }"
      >
        <i class="fas fa-link"></i>
        {{ title }}
      </router-link>
      <p class="small p-0 m-0 mb-1">
        {{ description }}
      </p>
      <div>
        <span class="badge bg-primary">
          <i class="fas fa-eye"></i>
          0111
        </span>
        <span class="badge bg-success ms-1">
          <i class="fas fa-star"></i>
          102112
        </span>
        <span class="badge bg-danger ms-1">
          <i class="fas fa-info"></i>
          312321
        </span>
        <span class="badge bg-warning ms-1">
          <i class="fas fa-utensils"></i>
          312321
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'count'],
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

.title:hover {
  color: #0099ff !important;
}
</style>
