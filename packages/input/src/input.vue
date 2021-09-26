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
      <!-- 前置元素 -->
      <div class="fe-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input :tabindex="tabindex" v-if="type !== 'textarea'" class="fe-input__inner" v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type" :disabled="inputDisabled"
        :readonly="readonly" :autocomplete="autoComplete || autocomplete" ref="input"
        @compositionstart="handleCompositionStart" @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd" @input="handleInput" @focus="handleFocus" @blur="handleBlur"
        @change="handleChange" :aria-label="label">
      <!-- 前置内容 -->
      <span class="fe-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="fe-input__icon" v-if="prefixIcon" :class="prefixIcon">
        </i>
      </span>
      <!-- 后置内容 -->
      <!-- <span
        class="fe-input__suffix"
        v-if="getSuffixVisible()">
        <span class="fe-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i class="fe-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">
            </i>
          </template>
          <i v-if="showClear"
            class="fe-input__icon fe-icon-circle-close fe-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i v-if="showPwdVisible"
            class="fe-input__icon fe-icon-view fe-input__clear"
            @click="handlePasswordVisible"
          ></i>
          <span v-if="isWordLimitVisible" class="fe-input__count">
            <span class="fe-input__count-inner">
              {{ textLength }}/{{ upperLimit }}
            </span>
          </span>
        </span>
        <i class="fe-input__icon"
          v-if="validateState"
          :class="['fe-input__validateIcon', validateIcon]">
        </i>
      </span> -->
      <!-- 后置元素 -->
      <div class="fe-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else :tabindex="tabindex" class="fe-textarea__inner" @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate" @compositionend="handleCompositionEnd" @input="handleInput"
      ref="textarea" v-bind="$attrs" :disabled="inputDisabled" :readonly="readonly"
      :autocomplete="autoComplete || autocomplete" :style="textareaStyle" @focus="handleFocus" @blur="handleBlur"
      @change="handleChange" :aria-label="label">
    </textarea>
    <!-- <span v-if="isWordLimitVisible && type === 'textarea'"
      class="fe-input__count">{{ textLength }}/{{ upperLimit }}</span> -->
  </div>
</template>
<script>
  export default {
    name: 'FeInput',

    componentName: 'ElInput',

    inheritAttrs: false,

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
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      inputDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
      autoComplete(){
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
      }
    },

    watch: {

    },

    methods: {
      focus() {},
      blur() {},
      handleBlur(event) {},
      select() {},
      resizeTextarea() {},
      handleFocus(event) {},
      handleInput(event) {},
      handleChange(event) {},
      clear() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear');
      },
      handlePasswordVisible() {},
      handleCompositionStart() {

      },
      handleCompositionUpdate() {

      },
      handleCompositionEnd() {},
      getInput() {
        return this.$refs.input || this.$refs.textarea;
      },
    },

    created() {},

    mounted() {},

    updated() {}
  };

</script>
