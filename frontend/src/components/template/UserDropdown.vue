<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{user.name}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gravatar from "vue-gravatar";

export default {
  name: "UserDropdown",
  components: { gravatar },
  computed: mapState(["user"]),
};
</script>

<style>
</style>
