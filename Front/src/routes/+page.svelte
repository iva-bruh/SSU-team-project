
<script>
    import Slog from  "../components/1page/Slog.svelte";
    import Menu from "../components/1page/Menu.svelte";
</script>

<div>
    <div class="container mx-auto grid grid-cols-12">
        <Slog />
        <div class="pom col-start-4 col-end-9">
        <b style="font-size: 32px;">В нашем приюте Вы можете</b>
        </div>
    </div>
    <Menu />
</div>

<style>
.pom{
    margin-top: 245px;
    width: 635px; 
    text-align:center;

}
</style>
