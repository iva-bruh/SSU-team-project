<script>
	export let id;
	export let image;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	import { isAuth } from "../../stores/auth";
	import ChangeButton from "../commons/ChangeButton.svelte";
	import DelButton from "../commons/DelButton.svelte";

	let cardId = id;
</script>

<div>
	<img style="border-radius: 10px;" src={image} alt="">
	<a href="/cards/{cardId}"><span style="font-size: 32px;">
		{#if id < 10}
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
{#if $isAuth}
    <a href="/cards/{cardId}"><ChangeButton>Ред.</ChangeButton></a>
    <DelButton on:click={dispatch('delete', {id})}>Удал.</DelButton>
{/if}