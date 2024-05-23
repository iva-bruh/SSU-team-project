<script>
	export let id;
	export let image;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	import { isAuth } from "../../stores/auth";
	import ChangeButton from "../commons/ChangeButton.svelte";
	import DelButton from "../commons/DelButton.svelte";
</script>
<div>
	<img style="border-radius: 10px;" src={image} alt="">
	<span style="font-size: 32px;">
		{#if id < 10}
		00{id}	
		{/if}
		{#if id >= 10}
		0{id}
		{/if}
		{#if id >=100}
			{id}
		{/if}
	</span>
</div>
{#if $isAuth}
    <ChangeButton>Ред.</ChangeButton>
    <DelButton on:click={dispatch('delete', {id})}>Удал.</DelButton>
{/if}