<template>
  <label class="fe-radio" :class="[
      border && radioSize ? 'fe-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]" role="radio" :aria-checked="model === label" :aria-disabled="isDisabled" :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label">
    <span class="fe-radio__input" :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }">
      <span class="fe-radio__inner"></span>
      <input ref="radio" class="fe-radio__original" :value="label" type="radio" aria-hidden="true" v-model="model"
        @focus="focous = true" @blur="focus = false" @change="handleChange" :name="name" :disabled="isDisabled"
        tabindex="-1">
    </span>
    <span class="fe-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emiter from 'fe-ui/mixins/Emiter';
  export default {
    name: 'FeRadio',

    componentName: 'FERadio',

    inheritAttrs: false,
    mixins: [Emiter],
    data() {
      return {
        textareaCalcStyle: {},
        hovering: false,
        focused: false,
        isComposing: false,
        passwordVisible: false
      };
    },

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'FERadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      radioSize() {
        const temRadioSize = this.size;
        return temRadioSize;
      },
      isDisabled() {
        return this.disabled;
      },
      tabIndex() {
        return (this.model !== this.label) ? -1 : 0;
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('FERadioGroup', 'input', [val])
          } else {
            this.$emit('input', val);
          }
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      },
    },

    watch: {},

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.dispatch('FERadioGroup', 'handleChange', this.model)
        });
      }
    },

    created() {
      this.focus = false;

    },

    mounted() {},

    updated() {}
  };

</script>
