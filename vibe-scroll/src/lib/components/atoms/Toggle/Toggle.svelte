<script>
  let { checked = $bindable(false) } = $props();
</script>

<form>
  <label class="text-base">
    Stack cards
    <input class={checked ? "checked" : ""} type="checkbox" bind:checked />
  </label>
</form>

<style>
  form {
    display: contents;

    label {
      display: flex;
      width: fit-content;
      flex-direction: column;
      cursor: pointer;
      color: var(--color-secondary);

      input[type="checkbox"] {
        appearance: none;
        cursor: inherit;
        background: var(--color-primary);
        corner-shape: squircle;
        border-radius: 2rem;
        width: 4rem;
        height: 2rem;
        position: relative;
        border: 0.125rem solid var(--color-primary-tint);
        transition: background 0.2s ease;

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-115%, -50%);
          corner-shape: inherit;
          aspect-ratio: 1;
          height: 75%;
          background: white;
          border-radius: 50%;
          transition:
            transform 0.2s ease-in-out,
            background 0.2s ease-in-out;
        }

        &.checked {
          background: var(--color-secondary-tint);
          border-color: var(--color-secondary-shade);
          &::after {
            background: black;
            transform: translate(15%, -50%);
          }
        }
      }
    }
  }
</style>
