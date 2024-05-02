<script lang="ts">
	import { onMount } from "svelte";
    import "../assets/app.css";
	import HdFooter from "../components/Footer/HDFooter.svelte";
	import HdHeader from "../components/Header/HDHeader.svelte";
	import {isAuth} from "../stores/auth"
	
	onMount(()=>{
		const res = localStorage.getItem('auth')
		if (res !== 'false'){
			isAuth.set(true)
		}
	})
</script>

<HdHeader />
<slot />
<HdFooter />