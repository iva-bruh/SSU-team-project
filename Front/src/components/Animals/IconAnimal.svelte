<script>
	export let id;
	export let image;
	export let name;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	import { isAuth } from "../../stores/auth";
	import ChangeButton from "../commons/ChangeButton.svelte";
	import DelButton from "../commons/DelButton.svelte";
</script>

<div class="container mx-auto flex items-center justify-between">
	<div>
	<img style="border-radius: 10px;" src={image} alt="">
	<div>
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
	<div class=" con display: flex" style="gap:59px">
		{#if $isAuth}
			<span style="font-size: 32px;">
				{name}
			</span>
			<ChangeButton>Ред.</ChangeButton>
			<DelButton on:click={dispatch('delete', {id})}>Удал.</DelButton>
		{/if}
	</div>
	</div>
	</div>
	</div>
