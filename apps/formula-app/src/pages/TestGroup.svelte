<script>
  import { onMount } from 'svelte';
  import { beaker } from '../../../../dist/packages/svelte/formula';

  const initData = [{
    productName: 'Retro Encab',
    make: 'Rockwell Automation',
    price: 19879.98
  }, {
    productName: 'Foobar Encab',
    make: 'Foobar Automation',
    price: 15429.42
  }];

  const productGroup = beaker();
  console.log(productGroup);
  productGroup.init(initData);


  const products = productGroup.stores.formValues;

  $: console.log($products);

  onMount(() => {

  });
</script>

<div use:productGroup.group>
  {#each $products as product, i}
    <div class='product'>
      <div class='form-field'>
        {JSON.stringify(product)}
        <label for='productName-{i}'>Product Name</label>
        <input id='productName-{i}' type='text' name='productName' value='{product.productName}' />
      </div>
      <div class='form-field'>
        <label for='make-{i}'>Make</label>
        <input id='make-{i}' type='text' name='make' value='{product.make}' />
      </div>
      <div class='form-field'>
        <label for='price-{i}'>Price</label>
        <input id='price-{i}' type='number' name='price' value='{product.price}' />
      </div>
    </div>


    <!--    <div class='form-field'>-->
    <!--      <label for='productName-{i}'>Product Name</label>-->
    <!--      <input id='productName-{i}' type='text' name='productName'  />-->
    <!--    </div>-->
    <!--    <div class='form-field'>-->
    <!--      <label for='manufacturer-{i}'>Manufacturer</label>-->
    <!--      <input id='manufacturer-{i}' type='text' name='manufacturer'  />-->
    <!--    </div>-->
    <!--    <div class="form-field">-->
    <!--      <label for="price-{i}">Price</label>-->
    <!--      <input id="price-{i}" type="number" name="price" value={product.price} />-->
    <!--    </div>-->
  {/each}
</div>
