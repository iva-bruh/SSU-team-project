<script>
    import {ApiModule} from '../../lib/api'
    import AddButton from '../../components/commons/AddButton.svelte';
    import {isAuth} from '../../stores/auth'
	import IconAnimal from '../../components/Animals/IconAnimal.svelte';
    import { invalidate } from '$app/navigation';

    export let data;
	$: animals = data.animals;

    async function createAnimal(){
        await ApiModule.createAnimal({
            image: '/images/noimage.png',
            name: null
        });
        invalidate('refresh');
    }

    async function deleteAnimal(event){
        await ApiModule.deleteAnimal(event.detail.id);
        invalidate('refresh');
    }
</script>

<div class="container mx-auto">
    <div class="relative">
        <h1 class="text-center text-[32px] font-bold my-12">Выберите друга!</h1>
        {#if $isAuth}
        <AddButton on:click={createAnimal} class="absolute right-0 top-[50%] translate-y-[-50%]">Добавить</AddButton>
        {/if}
    </div>
    <div>
        {#each animals as item}
        <IconAnimal id={item.id} image={item.image} on:delete={deleteAnimal}/>
        {/each}
    </div>
</div>

