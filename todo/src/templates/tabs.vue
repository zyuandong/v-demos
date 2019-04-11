<template>
  <div class="helper">
    <span class="left">{{uncompletedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="right" @click="clearCompleted()">clear completed</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  props: {
    todos: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    uncompletedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle', state);
    },
    clearCompleted() {
      this.$emit('clear');
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .helper{
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #fff
    font-size 14px
    font-smoothing: antialiased
  }
  .left, .right, .tabs{
    padding 0 10px
    box-sizing border-box
  }
  .left, .right{
    width 150px
  }
  .left{
    text-align left
  }
  .right{
    text-align right
    cursor pointer
  }
  .tabs{
    width 200px
    display flex
    justify-content space-around
    * {
      display inline-block
      padding 0 10px
      cursor pointer
      border 1px solid rgba(175,47,47,0)
      &.actived{
        border-color rgba(175,47,47,0.4)
        border-radius 5px
      }
    }
  }
</style>