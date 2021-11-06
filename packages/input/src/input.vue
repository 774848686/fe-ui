<template>
  <div :class="[
    type === 'textarea' ? 'fe-textarea' : 'fe-input',
    inputSize ? 'fe-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'is-exceed': inputExceed,
      'fe-input-group': $slots.prepend || $slots.append,
      'fe-input-group--append': $slots.append,
      'fe-input-group--prepend': $slots.prepend,
      'fe-input--prefix': $slots.prefix || prefixIcon,
      'fe-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
    }
    ]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <template v-if="type !== 'textarea'">
      <input :tabindex="tabindex" v-if="type !== 'textarea'" class="fe-input__inner" v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type" :disabled="inputDisabled"
        :readonly="readonly" :autocomplete="autoComplete || autocomplete" ref="input"
        @compositionstart="handleCompositionStart" @compositionupdate="handleCompositionUpdate" @input="handleInput"
        @focus="handleFocus" @blur="handleBlur" :aria-label="label">
      <span class="fe-input__suffix">
        <span class="fe-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i class="fe-input__icon" v-if="suffixIcon" :class="suffixIcon">
            </i>
          </template>
          <i v-if="showClear" class="fe-input__icon fe-icon-circle-close fe-input__clear" @mousedown.prevent
            @click="clear"></i>
          <i v-if="showPwdVisible" class="fe-input__icon fe-icon-view fe-input__clear"></i>
          <span v-if="isWordLimitVisible" class="fe-input__count">
            <span class="fe-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
      </span>
    </template>
  </div>
</template>
<script>
import {isKorean} from '@utils/shared';
  export default {
    name: 'FeInput',

    componentName: 'FEInput',

    inheritAttrs: false,

    data() {
      return {
        textareaCalcStyle: {},
        hovering: false,
        focused: false,
        passwordVisible: false
      };
    },

    props: {
      value: [String, Number],
      size: String,
      resize: String,
      form: String,
      disabled: Boolean,
      readonly: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      showWordLimit: {
        type: Boolean,
        default: false
      },
      tabindex: String
    },

    computed: {
      inputSize() {
        console.log(this.size)
        return this.size;
      },
      inputDisabled() {
        return this.disabled;
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
      autoComplete() {
        return this.autosize
      },
      showClear() {
        return this.clearable &&
          !this.inputDisabled &&
          !this.readonly &&
          this.nativeInputValue &&
          (this.focused || this.hovering);
      },
      showPwdVisible() {
        return this.showPassword &&
          !this.inputDisabled &&
          !this.readonly &&
          (!!this.nativeInputValue || this.focused);
      },
      isWordLimitVisible() {
        return this.showWordLimit &&
          this.$attrs.maxlength &&
          (this.type === 'text' || this.type === 'textarea') &&
          !this.inputDisabled &&
          !this.readonly &&
          !this.showPassword;
      },
      upperLimit() {
        return this.$attrs.maxlength;
      },
      textLength() {
        if (typeof this.value === 'number') {
          return String(this.value).length;
        }

        return (this.value || '').length;
      },
      inputExceed() {
        // show exceed style if length of initial value greater then maxlength
        return this.isWordLimitVisible &&
          (this.textLength > this.upperLimit);
      },
    },

    watch: {
      nativeInputValue() {
        this.setNativeInputValue();
      },
    },

    methods: {
      handleBlur(event) {
        this.focused = false;
      },
      handleFocus(event) {
        this.focused = true;
      },
      handleInput(event) {
        if (this.isComposing) return;
        if (event.target.value === this.nativeInputValue) return;
        this.$emit('input', event.target.value);
        this.$nextTick(this.setNativeInputValue);
      },
      clear() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear');
      },
      handleCompositionStart() {
        this.isComposing = true;
      },
       handleCompositionUpdate(event) {
        const text = event.target.value;
        const lastCharacter = text[text.length - 1] || '';
        this.isComposing = !isKorean(lastCharacter);
      },
      handleCompositionEnd(event) {
        if (this.isComposing) {
          this.isComposing = false;
          this.handleInput(event);
        }
      },
      getInput() {
        return this.$refs.input || this.$refs.textarea;
      },
      getSuffixVisible() {
        return this.$slots.suffix ||
          this.suffixIcon ||
          this.showClear ||
          this.showPassword ||
          this.isWordLimitVisible ||
          (this.validateState && this.needStatusIcon);
      },
      getInput() {
        return this.$refs.input || this.$refs.textarea;
      },
      setNativeInputValue() {
        const input = this.getInput();
        if (!input) return;
        if (input.value === this.nativeInputValue) return;
        input.value = this.nativeInputValue;
      },
    },

    created() {
      this.isComposing = false;
    },

    mounted() {
      this.setNativeInputValue();
    },

    updated() {}
  };

</script>
