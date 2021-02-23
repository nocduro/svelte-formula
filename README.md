# Formula + Beaker = Reactive Forms for Svelte^2

<div style='text-align: center'>

![The Svelte Formula Logo](https://raw.githubusercontent.com/tanepiper/svelte-plugins/main/packages/docs-site/static/img/logo_256.png)
</div>

[![svelte-formula](https://img.shields.io/npm/v/svelte-formula?label=svelte-formula)](https://www.npmjs.com/package/svelte-formula)

- [Documentation](https://formula.svelte.codes)
- [Changelog](https://github.com/tanepiper/svelte-formula/blob/main/CHANGELOG.md)

`svelte-formula` is a Library for use with [Svelte](https://svelte.dev) that super-charges your ability to create rich
data-driven for applications.

## Formula

<div style='text-align: center; float: left; margin-right: 20px'>

![The Svelte Formula Logo](packages/docs-site/static/img/formula-small.png)
</div>

**Formula** is a library for creating *Zero Configuration* reactive form components, and fully data-driven applications.

**Zero-Configuration** means you need nothing more than a well-defined HTML5 form element to have fully reactive stores
of data.

Accessing the input requires only setting the `name` property, and for validation providing attributes like `require`
or `minlength`. Formula supports single and multi-value inputs across all widely supported HTML inputs and extends them
with checkbox groups and radio groups, and composite fields of values like text or number.

Formula creates a form instance that contains Svelte [stores](https://formula.svelte.codes/docs/stores/stores) that
contain value and validation information, and some
additional [lifecycle methods](https://formula.svelte.codes/docs/lifecycle) that allow your to dynamically add and
remove customisations, and reset or destroy the form. It also attempts to apply ARIA attributes to help with
accessibility.

### Example

The below example shows a simple single field component using Formula, but there are more examples in
the [docs](https://formula.svelte.codes)

[Live Demo](https://svelte.dev/repl/3c3fe78a258a45779bd122d399560f19)

```svelte
<script>
    import { createEventDispatcher } from 'svelte';
    import { get } from 'svelte/store'
    import { formula } from 'svelte-formula'
    
    const { form, isFormValid, validity, touched, submitValues } = formula();

    const dispatcher = createEventDispatcher()

    // Allow components to accept value that can be used as default values
    export let userName = '';

    // You can calculate values for valid UI states
    $: usernameInvalid = $touched?.userName && $validity?.userName?.invalid

    // Handle submission of data easily to parent components or services
    function submitForm() {
      dispatch('updateUser', {
        user: get(submitValues)
      })
    }
  </script>

<!-- Use as form element to get full form submission validation and integration with the native validation UI -->
<!-- You can also apply this to any element containing input items, but will not get form validation -->
<form use:form on:submit|preventDefault={submitForm}>
  <div class="form-field">
    <label for="userName">User Name</label>
    <input type="text" id="userName" name="userName" required minlength="8" class:error={usernameInvalid} bind:value={userName} />
    <span hidden={!usernameInvalid}>{$validity?.userName?.message}</span>
  </div>
  
  <button disabled={!$isFormValid} type="submit">Update User Name</button>
</form>

<style>
  .error {
    border: 1px solid hotpink;
  }
</style>
```

## Extending Formula

Formula also supports a bunch of [powerful options](https://formula.svelte.codes/docs/options) that provide additional
validation, enrichment and custom messages.

For example with the `enrich` [option](https://formula.svelte.codes/docs/options#enrich)
and `enrichment` [store](https://formula.svelte.codes/docs/stores/stores-enrichment) you can provide functions that
calculate additional computed values based on user input - for example calculating a password strength, or the length of
text a user has entered. These are useful.

Validations can be provided at the form and field level, and integrate with in-built browser validations to provide
native messages, which can be customised for localisation.

### Beaker

<div style='text-align: center; float: left; margin-right: 20px'>

![The Svelte Formula Logo](packages/docs-site/static/img/beaker-small.png)
</div>

**Beaker** take Formula and mixes in another layer for Formula for working with collections of data.

Using row-based input you can create full form instances per row that are also fully reactive and feed into Beaker's
collection store.

Beaker also provides methods for setting, adding and removing items from the in-built stores, when can be used with
Svelte's
`{#each}{/each}` blocks to create a re-usable template in the component

This is useful for building multi-row editable tables, or a list of contacts. When to create a `beaker` instance you

### Example

```sveltehtml

<script>
  import { createEventDispatcher } from 'svelte';
  import { get } from 'svelte/store';
  import { beaker } from 'svelte-formula';

  const productGroup = beaker();
  const productList = productGroup.formValues;
  const productsValid = productGroup.validity;
  const rowsTouched = productGroup.touched;
  const isGroupValid = productGroup.isFormValid;

  const dispatcher = createEventDispatcher()

  // Allow components to accept value that can be used as default values
  export let products = [];
  productGroup.init(products);


  // Handle submission of data easily to parent components or services
  function submitForm() {
    dispatch('updateUser', {
      user: get(submitValues)
    });
  }
  
  
  function showError(index, field) {
    const validity = get(productsValid)?.[i]?.[field];
    const touched = get(rowsTouched)?.[i]?.[field];
    return touched && validity
  }
  
</script>

<!-- Use as form element to get full form submission validation and integration with the native validation UI -->
<!-- You can also apply this to any element containing input items, but will not get form validation -->
<form use:productGroup.group on:submit|preventDefault={submitForm}>
  {#each $productList as product, i}
    <fieldset>
      <legend>Product Details</legend>
      <div class='form-field'>
        <label for='product-name-{i}'>Product Name</label>
        <input type='text' id='productName' name='productName' required class:error={showError(i, 'productName')} />
        <span hidden={!showError(i, 'productName')}>{showError(i, 'productName')}</span>
      </div>
      <div class='form-field'>
        <label for='product-code-{i}'>Product Code</label>
        <input type='text' id='productCode' name='productCode' required minlength='4' />
      </div>
      <div class='form-field'>
        <label for='product-description-{i}'>Product Description</label>
        <textarea type='text' id='productDescription' name='productDescription'></textarea>
      </div>
    </fieldset>
  {/each}

  <button disabled={!$isGroupValid} type='submit'>Update User Name</button>
</form>

<style>
  .error {
    border: 1px solid hotpink;
  }
</style>
```

## Install Instructions

`npm i svelte-formula`

## Usage

All you need is an element container with the Svelte [use](https://svelte.dev/docs#use_action) directive and form input
fields with their `name` property set.

Visit the [documentation](https://formula.svelte.codes) for more details API instructions.
