<script>
	export let id;
	export const image = 'images/noimage.png';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	import { isAuth } from "../../stores/auth";
	import ChangeButton from "../commons/ChangeButton.svelte";
	import DelButton from "../commons/DelButton.svelte";
</script>
<div>
	<img style="border-radius: 10px;" src={image} alt="">
	<span style="font-size: 32px;">00{id}</span>
</div>
{#if $isAuth}
    <ChangeButton>Ред.</ChangeButton>
    <DelButton on:click={dispatch('delete', {id})}>Удал.</DelButton>
{/if}