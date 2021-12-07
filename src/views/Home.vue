<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6 col-sm-12">
        <form class="d-flex">
          <div class="input-group mb-5">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Search Profile..."
              aria-label="Search Profile..."
              v-model="search"
            />
            <button class="btn btn-secondary btn-lg" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <CardProfile />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <CardProfile />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <CardProfile />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <CardProfile />
      </div>
    </div>
  </div>
</template>

<script>
import CardProfile from '../components/CardProfile.vue';

export default {
  components: {
    CardProfile,
  },
  data() {
    return {
      search: '',
    };
  },

  mounted() {},
};
</script>
