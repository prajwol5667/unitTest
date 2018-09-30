<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="count++" class='increment'>Increment</button>
    <button @click="count--" class='decrement' v-show="count">0>Decrement</button>

  </div>

</template>


<script>
  export default {
  data() {
    return {
      count: 0 
    };
  }
};
</script>
