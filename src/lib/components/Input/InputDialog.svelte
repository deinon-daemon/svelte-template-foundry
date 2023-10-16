<script lang="ts">

    export let id = '';
    export let value = '';
    export let placeholder = '';
</script>

<input
        id={id}
        bind:this={value}
        {placeholder}
        class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] max-w-[300px] "
/>

<style lang="scss">
  input {
    &:focus {
      outline: 1px solid var(--border-hover);
      background-color: var(--main-hover);
    }
  }
  ::placeholder { /* Most modern browsers support this now. */
    color:    var(--main-text);
  }
</style>
