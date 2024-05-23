<script lang="ts">
    import {ApiModule} from '../../lib/api'
    import AddButton from '../../components/commons/AddButton.svelte';
    import {isAuth} from '../../stores/auth'
	import IconAnimal from '../../components/Animals/IconAnimal.svelte';

    let items = loadData();

    function loadData(){
        return ApiModule.getAnimals();
    }

    async function createAnimal(event){
        console.log(event)
        await ApiModule.createAnimal({
            image: null,
            name: null
        });
        items = loadData();
    }

    async function deleteAnimal(event){
        await ApiModule.deleteAnimal(event.detail.id);
        items = loadData();
    }
</script>

<div class="container mx-auto">
    {#await items}
        Loading...
    {:then value}
    <div class="relative">
        <h1 class="text-center text-[32px] font-bold my-12">Выберите друга!</h1>
        {#if $isAuth}
        <AddButton on:click={createAnimal} class="absolute right-0 top-[50%] translate-y-[-50%]">Добавить</AddButton>
        {/if}
    </div>
    <div>
        {#each value as item}
        <IconAnimal id={item.id} image={item.image} on:delete={deleteAnimal}/>
        {/each}
    </div>
    {/await}
</div>