<script>
  import { formula, formulaStores } from '../../../../dist/packages/svelte/formula';

  const options = {
    defaultValues: {
      username: 'Hello',
      password: '',
      passwordMatch: '',
      radio: '3',
      checkbox: ['1', '3']
    },
    enrich: {
      password: {
        passwordScore: (value) => {
          let score = 0;
          if (value.length > 8) {
            score += 20;
          }
          if (value.match(/[A-Z].{2,3}/g)) {
            score += 10;
          }
          if (value.match(/[A-Z].{4,}/g)) {
            score += 18;
          }
          if (value.match(/[a-z].{2,3}/g)) {
            score += 10;
          }
          if (value.match(/[a-z].{4,}/g)) {
            score += 18;
          }
          if (value.match(/[0-9!"£$%^&*()].{2,3}/g)) {
            score += 10;
          }
          if (value.match(/[0-9!"£$%^&*()].{2,3}/g)) {
            score += 18;
          }
          return score;
        },
      },
    },
    formValidators: {
      passwordsMatch: (values) => values.password === values.passwordMatch ? null : 'Your passwords do not match',
    },
    validators: {
      username: {
        inDomain: (value) => value.includes('@svete.codes') ? null : 'You in the svelte codes?',
      },
    },
  };

  const {
    form,
    validity,
    formValidity,
    formValues,
    touched,
    isFormValid,
    updateForm,
    destroyForm,
    enrichment,
    isFormReady,
    resetForm
  } = formula(options);

  $: console.log($isFormReady);
  $: console.log($validity);
  $: console.log($formValues);
  $: console.log($enrichment);

  $: usernameInvalid = ($touched.username && $validity.username.invalid) && $validity.username.message;
  $: passwordInvalid = ($touched?.password && $validity?.password?.invalid) && $validity?.password?.message;
  $: passwordMatchInvalid = ($touched?.passwordMatch && $validity?.passwordMatch?.invalid) && $validity?.passwordMatch?.message;

  function addValidation() {

  }

  function removeValidation() {

  }

  function resetFormData() {
    resetForm();
  }

</script>
<h2>Signup Form Example</h2>
<p>A simple signup form example</p>
{$isFormValid}
{$isFormReady}
{usernameInvalid}


<div class='container signup-container'>
  {$touched.username}
  <div hidden={$isFormValid}>
    {#each Object.entries($formValidity) as [key, val]}
      {val}
    {/each}
    {#each Object.entries($validity.username) as [key, val]}
      {val}
    {/each}
  </div>
  <form class='signup' use:form id='signup'>
    <div class='form-group'>
      <label for='username'>User Name</label>
      <input type='email' name='username' id='username' required class:error={$touched.username && $validity.username.invalid} />
      <span hidden={!$touched.username && $validity.username.invalid}>{$validity.username.message}</span>
    </div>

    <div class='form-group'>
      <label for='password'>Password</label>
      <input type='password' name='password' id='password' minlength='8' required class:error={passwordInvalid}
             value='dasdasd' />
      {#if $isFormReady}
      <meter value={$enrichment.password.passwordScore || 0} min='0' max='100' low='33' high='66'
             optimum='80'></meter>
        {/if}
      <span hidden={!passwordInvalid}>{passwordInvalid}</span>
    </div>

    <div class='form-group'>
      <label for='passwordMatch'>Password Match</label>
      <input type='password' name='passwordMatch' id='passwordMatch' minlength='8' required
             class:error={passwordMatchInvalid} />
      <span hidden={!passwordMatchInvalid}>{passwordMatchInvalid}</span>
    </div>

    <div class='form-group'>
      <input type='radio' name='radio' id='radio1' value='1' />
      <input type='radio' name='radio' id='radio2' value='2' />
      <input type='radio' name='radio' id='radio3' value='3' />
    </div>

    <div class='form-group'>
      <input type='checkbox' name='checkbox' id='checkbox1' value='1' />
      <input type='checkbox' name='checkbox' id='checkbox2' value='2' />
      <input type='checkbox' name='checkbox' id='checkbox3' value='3' />
    </div>

    <div class='form-group'>
      <textarea name='foobar'></textarea>
    </div>

    <div>
      <button type='submit' disabled={!$isFormValid}>Login</button>
      <button type='button' on:click|preventDefault={addValidation}>Add</button>
      <button type='button' on:click|preventDefault={removeValidation}>Remove</button>
      <button type='button' on:click|preventDefault={resetFormData}>Reset</button>

      <button type='button' on:click|preventDefault={() => destroyForm()}>Destroy</button>
    </div>
  </form>
</div>
