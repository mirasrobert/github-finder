<template>
  <div class="card text-white bg-dark mb-3">
    <div class="card-body">
      <a
        :href="url"
        target="_blank"
        class="fw-bold title text-decoration-none"
        :to="{ name: 'Home' }"
      >
        <i class="fas fa-link"></i>
        {{ title }}
      </a>
      <p class="small p-0 m-0 mb-1">
        {{ description }}
      </p>
      <div>
        <span class="badge bg-primary">
          <i class="fas fa-eye"></i>
          {{ watchers }}
        </span>
        <span class="badge bg-success ms-1">
          <i class="fas fa-star"></i>
          {{ stargazers }}
        </span>
        <span class="badge bg-danger ms-1">
          <i class="fas fa-info"></i>
          {{ open_issues }}
        </span>
        <span class="badge bg-warning ms-1">
          <i class="fas fa-utensils"></i>
          {{ forks }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'count',
    'watchers',
    'stargazers',
    'open_issues',
    'forks',
    'url',
  ],
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
