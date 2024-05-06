<script lang="ts">
    import AddButton from '../../components/commons/AddButton.svelte';
import {isAuth} from '../../stores/auth'
</script>

<div class="container mx-auto relative">
    <h1 class="text-center text-[32px] font-bold my-12">Выберите друга!</h1>
    {#if $isAuth}
    <AddButton class="absolute right-0 top-[50%] translate-y-[-50%]">Добавить</AddButton>
    {/if}
</div>