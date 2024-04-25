<script>
    import "../assets/app.css";
	import HdFooter from "../components/Footer/HDFooter.svelte";
	import HdHeader from "../components/Header/HDHeader.svelte";
</script>

<HdHeader />
<slot />
<HdFooter />