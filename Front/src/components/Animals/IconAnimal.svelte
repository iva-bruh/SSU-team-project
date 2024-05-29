<script>
	export let id;
	export let image;
	export let name;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	import { isAuth } from "../../stores/auth";
	import ChangeButton from "../commons/ChangeButton.svelte";
	import DelButton from "../commons/DelButton.svelte";

	let cardId = id;
</script>

<div class="container mx-auto grid grid-cols-6">
	<div class="col-start-2 col-end-6">
	<img style="border-radius: 10px; width:480px" src={image} alt="" />
	<a href="/cards/{cardId}">
		<span style="font-size: 32px;">
		{#if id <= 10}
			00{id}	
		{/if}
		{#if id >= 10}
			0{id}
		{/if}
		{#if id >=100}
			{id}
		{/if}
	</span></a>
	</div>
	<div class="col-start-2 col-end-6" style="display:flex; justify-content: space-between">
		<div style="font-size: 32px;">
			<a href="/cards/{cardId}">{name}</a>
		</div>
		{#if $isAuth}
		<div style="display:flex; gap: 25px;">
			<a href="/cards/{cardId}"><ChangeButton>Ред.</ChangeButton></a>
			<DelButton on:click={dispatch('delete', {id})}>Удал.</DelButton>
		</div>
		{/if}
		</div>
	</div>


