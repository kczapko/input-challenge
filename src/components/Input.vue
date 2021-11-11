<template>
  <div class="input-container" :class="{ error: error, full: fullWidth, [`size-${size}`]: true }">
    <label>
      <span class="label">{{ label || 'Label' }}</span>
      <div class="input">
        <span v-if="startIcon" class="material-icons icon icon--start">{{ startIcon }}</span>
        <span v-if="endIcon" class="material-icons icon icon--end">{{ endIcon }}</span>
        <input
          v-if="!multiline"
          v-bind="$attrs"
          :type="$attrs.type || 'text'"
          :placeholder="$attrs.placeholder || 'Placeholder'"
          :class="{ startIcon, endIcon }"
        />
        <textarea
          v-if="multiline"
          v-bind="$attrs"
          :placeholder="$attrs.placeholder || 'Placeholder'"
          :class="{ startIcon, endIcon }"
        ></textarea>
      </div>
      <small v-if="helperText">{{ helperText }}</small>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    label: String,
    placeholder: String,
    error: Boolean,
    helperText: String,
    startIcon: String,
    endIcon: String,
    size: {
      type: String,
      validate(val) {
        return ['sm', 'md'].includes(val);
      },
      default: 'md',
    },
    fullWidth: Boolean,
    multiline: Boolean,
  },
};
</script>

<style scoped>
.input-container {
  display: inline-block;
  font-family: 'Noto Sans', sans-serif;
  color: #333;
}

.label {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.4rem;
}

input,
textarea {
  border: 1px solid #828282;
  border-radius: 0.8rem;
  padding: 1.8rem 1.2rem;
  font-size: 1.4rem;
  color: #333;
  display: block;
  width: 20rem;
}

.input-container:hover input,
.input-container:hover textarea,
.input-container:hover .icon {
  border-color: #333;
}

.input-container:focus-within label,
.input-container:focus-within .icon {
  color: #2962ff;
}

.input-container:focus-within input,
.input-container:focus-within textarea {
  border-color: #2962ff;
  outline: 0;
}

input::placeholder,
textarea::placeholder {
  color: #828282;
  opacity: 1;
}

.input-container.error,
.input-container.error .icon {
  color: #d32f2f;
}

.input-container.error input,
.input-container.error textarea {
  border-color: #d32f2f;
}

.input-container.error:hover,
.input-container.error:hover .icon {
  color: #333;
}

.input-container.error:hover input,
.input-container.error:hover textarea {
  border-color: #333;
}

.input-container.error:focus-within label,
.input-container.error:focus-within .icon {
  color: #d32f2f;
}

.input-container.error:focus-within input,
.input-container.error:focus-within textarea {
  border-color: #d32f2f;
  outline: 0;
}

input:disabled,
textarea:disabled,
.input-container:hover input:disabled,
.input-container:hover textarea:disabled {
  background-color: #f2f2f2;
  border-color: #e0e0e0;
}

small {
  display: block;
  font-size: 1rem;
  margin-top: 0.4rem;
  color: #828282;
}

.input-container.error small {
  color: #d32f2f;
}

.input {
  position: relative;
}

input.startIcon,
textarea.startIcon {
  padding-left: 4.5rem;
}

input.endIcon,
textarea.endIcon {
  padding-right: 4.5rem;
}

.icon {
  font-size: 1.8rem;
  position: absolute;
  color: #828282;
  top: 50%;
  transform: translateY(-50%);
}

.icon--start {
  left: 1.2rem;
}

.icon--end {
  right: 1.2rem;
}

.size-sm input,
.size-sm textarea {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.full,
.full input,
.full textarea {
  width: 100%;
}
</style>
