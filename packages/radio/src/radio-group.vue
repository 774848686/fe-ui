<template>
  <component
    :is="_elTag"
    class="fe-radio-group"
    role="radiogroup"
  >
    <slot></slot>
  </component>
</template>
<script>
  export default {
     name: 'FeRadioGroup',
    componentName: 'FERadioGroup',
    data() {
      return {
       
      };
    },

    props: {
      value: {},
    },

    computed: {
       _elTag() {
        return (this.$vnode.data || {}).tag || 'div';
      },
    },

    watch: {},

    methods: {
      
    },
    created() {
       this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },

    mounted() {},

    updated() {}
  };

</script>
