
<script>
    import Slog from  "../components/1page/Slog.svelte";
    import Menu from "../components/1page/Menu.svelte";
    import Help from "../components/1page/Help.svelte";
</script>


<Slog />
<div class="pom container mx-auto flex items-center justify-center">
    <b style="font-size: 32px;">В нашем приюте Вы можете</b>
</div>
<Menu />
<Help/>

<style>
    .pom{
        margin-top: 245px;
        width: 635px; 
    }
</style>

