<script lang="ts">
	import { onMount } from "svelte";
	import OutInsBackground from "../../components/OutInsBackground.svelte";
	import BirButton from "../../components/commons/BirButton.svelte";
	import {isAuth, auth} from '../../stores/auth'

	let login: string = null
	let password: string = null
	function onAuth() {
		auth(login, password)
		localStorage.setItem('auth', JSON.stringify($isAuth))
		login = null
		password = null
	}

	function outAuth(){
		isAuth.set(false)
		localStorage.setItem('auth', JSON.stringify($isAuth))
	}

	onMount(()=>{
		if (localStorage.getItem('auth') === 'true'){
			isAuth.set(true)
		}
	})
</script>

<OutInsBackground>
	<div class="flex flex-col items-center gap-12 py-12">
		<span style="font-size: 32px;">Вход</span>
		{#if !$isAuth}
			<input class="int2" type="text" placeholder="Логин:" bind:value={login}>
			<input class="int2" type="text" placeholder="Пароль:" bind:value={password}>
		{:else}
			<input class="int" type="text" placeholder="Логин:" bind:value={login}>
			<input class="int" type="text" placeholder="Пароль:" bind:value={password}>	
		{/if}
		<BirButton on:click={onAuth}>Войти</BirButton>
		<BirButton on:click={outAuth}>Выйти</BirButton>
	</div>
</OutInsBackground>



<style>
	.int{
		background: #EBEBEB;
		font-size: 32px;
		width: 414px;
		height: 68px;
		border: 2px rgb(0, 255, 0) solid;
	}
	.int2{
		background: #EBEBEB;
		font-size: 32px;
		width: 414px;
		height: 68px;
		border: 2px red solid;
	}
</style>