<!-- my Index -->
<template>
  <teleport to="body">
    <div>
      <p v-for="item in repositories" :key="item.id">
        {{ item.id }}--{{ item.name }}
      </p>
    </div>
  </teleport>
</template>

<script>
import { onMounted, ref, watch, toRefs } from "vue";


const dinner = {
  meal: 'tacos'
}

const handler = {
  get(target, prop, receiver) {
    track(target, prop)
    return Reflect.get(...arguments)
  },
  set(target, key, value, receiver) {
    trigger(target, key)
    return Reflect.set(...arguments)
  }
}

const track = (target, prop) => console.log(target, prop);
const trigger = (target, key) => console.log(target, key);


const proxy = new Proxy(dinner, handler)
console.log(proxy.meal)

export default {
  components: {},
  data() {
    return {};
  },

  setup(props) {
    const { user } = toRefs(props);
    const repositories = ref([]);

    const getUserRepositories = async () => {
      repositories.value = await fetch("/api/users").then(res => res.json());
    };

    onMounted(getUserRepositories);
    watch(user, getUserRepositories);
    return {
      repositories,
      getUserRepositories,
    };
  },

  computed: {},

  mounted() {
    // this.getUserRepositories()
  },

  methods: {},
};
</script>
<style lang='css' scoped>
</style>