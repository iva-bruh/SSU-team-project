<script>
	import AnimalCardChange from "../../../components/Animals/AnimalCardChange.svelte";
    import { invalidate } from '$app/navigation';
    import {ApiModule} from "../../../lib/api";
	import AnimalCard from "../../../components/Animals/AnimalCard.svelte";
	import { isAuth } from "../../../stores/auth";

    import { page } from '$app/stores';
    const cardId = $page.params.cardId

    export let data;
	$: animal = data.animal;

    async function ChangeAnimal(event){
        await ApiModule.changeAnimal({
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

    // async function createAnimal(event){
    //     console.log(event)
    //     await ApiModule.createAnimal({
    //         image: event.detail.image,
    //         type: event.detail.type,
    //         name: event.detail.name,
    //         sex: event.detail.sex,
    //         age: event.detail.age,
    //         breed: event.detail.breed,
    //         story: event.detail.story,
    //         about: event.detail.about
    //     });
    //     invalidate('refresh');
    // }
</script>

<!-- {#each animals as item } -->
<!-- {#if item.id === cardId} -->
    {#if $isAuth}
    <AnimalCardChange id={animal.id} on:add={ChangeAnimal}/>
    {:else}
    <AnimalCard id={animal.id} image={animal.image} type={animal.type} name={animal.name} sex={animal.sex} age={animal.age} breed={animal.breed} story={animal.story} about={animal.about}/>
    {/if}
<!-- {/if} -->
<!-- {/each} -->

<!-- <span>{cardId}</span> -->


