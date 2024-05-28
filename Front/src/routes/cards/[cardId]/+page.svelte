<script>
	import AnimalCardChange from "../../../components/Animals/AnimalCardChange.svelte";
    import { invalidate } from '$app/navigation';
    import {ApiModule} from "../../../lib/api";
	import AnimalCard from "../../../components/Animals/AnimalCard.svelte";
	import { isAuth } from "../../../stores/auth";

    import { page } from '$app/stores';
    const cardId = $page.params.cardId

    export let data;
	$: animals = data.animals;

    async function createAnimal(event){
        console.log(event)
        await ApiModule.createAnimal({
            image: event.detail.image,
            type: event.detail.type,
            name: event.detail.name,
            sex: event.detail.sex,
            age: event.detail.age,
            breed: event.detail.breed,
            story: event.detail.story,
            about: event.detail.about
        });
        invalidate('refresh');
    }
</script>

{#each animals as item }
<!-- {#if item.id === cardId} -->
    {#if $isAuth}
    <AnimalCardChange id={item.id} on:add={createAnimal}/>
    {:else}
    <AnimalCard id={item.id} image={item.image} type={item.type} name={item.name} sex={item.sex} age={item.age} breed={item.breed} story={item.story} about={item.about}/>
    {/if}
<!-- {/if} -->
{/each}

<!-- <span>{cardId}</span> -->


