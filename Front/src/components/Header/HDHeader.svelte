<script>
	import HdNav from "./HDNav.svelte";
</script>

<header class="header container mx-auto flex items-center justify-between">
    <div class="flex items-center gap-8">
        <img src="logo.svg" alt="">
        <span style="font-size: 40px;">ХвостатыйДом</span>
    </div>
    <div class="number">+7 912 345-67-89</div>
</header>

<style>
    .header{
        height: 100px;
    }

    .number{
        font-size: 24px;
        background: #EBEBEB;
        border-radius: 5px;
        padding: 8.5px 49px;
    }
</style>

<HdNav />