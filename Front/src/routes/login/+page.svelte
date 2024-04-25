<script>
	import OutInsBackground from "../../components/OutInsBackground.svelte";
	import BirButton from "../../components/commons/BirButton.svelte";
</script>

<OutInsBackground>
	<div class="flex flex-col items-center gap-12 py-12">
		<span style="font-size: 32px;">Вход</span>
		<input class="int" type="text" placeholder="Логин:">
		<input class="int" type="text" placeholder="Пароль:">
		<BirButton>Войти</BirButton>
	</div>
</OutInsBackground>



<style>
	.int{
		background: #EBEBEB;
		font-size: 32px;
		width: 414px;
		height: 68px;
		border: 2px black solid;
	}
</style>