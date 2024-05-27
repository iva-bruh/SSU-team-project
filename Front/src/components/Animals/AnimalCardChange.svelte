<script>
    export let id;
	import OutInsBackground from "../OutInsBackground.svelte";
	import PinkButton from "../commons/PinkButton.svelte";
	import AnimalCardId from "../commons/AnimalCardID.svelte";
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();


    let imageValue = '';
    let typeValue = '';
    let nameValue = '';
    let sexValue = '';
    let ageValue = '';
    let breedValue = '';
    let storyValue = '';
    let aboutValue = '';

    function btnClick(){
        if(imageValue.length && typeValue.length && nameValue.length && sexValue.length && ageValue.length && breedValue.length && storyValue.length && aboutValue.length){
            dispatch('add', {image: imageValue, type: typeValue, name: nameValue, sex: sexValue, age: ageValue, breed: breedValue, story: storyValue, about: aboutValue});
        }
    };
</script>

<OutInsBackground>
    <div class="flex justify-between p-4">
        <a href="/animals"><PinkButton on:click={btnClick} /></a>
        <AnimalCardId>
            {#if id < 10}
		        00{id}	
		    {/if}
		    {#if id >= 10}
		        0{id}
		    {/if}
		    {#if id >=100}
			    {id}
		    {/if}
        </AnimalCardId>
    </div>
    <div class="flex gap-4 px-4">
        <div class="flex items-center flex-col">
            <input class="image_int" placeholder="Путь изображения" type="text" bind:value={imageValue}>
            <span style="white-space: pre; font-size: 24px; color: #51C9C2; font-weight: bold; margin-bottom: -8px;">При звонке скажите номер</span>
            <span style="white-space: pre; font-size: 24px; color: #51C9C2; font-weight: bold;">карточки животного</span>
        </div>
        <div class="flex flex-col">
            <div class="flex gap-1 mb-2">
                <input class="int" placeholder="Вид" type="text" bind:value={typeValue}>
                <input class="int" placeholder="Имя" type="text" bind:value={nameValue}>
            </div>
            <div class="flex flex-col">
                <div>
                    <span style="font-size: 24px;">Пол:</span>
                    <input class="int2" type="text" bind:value={sexValue}>
                </div>
                <div>
                    <span style="font-size: 24px;">Возраст:</span>
                    <input class="int2" type="text" bind:value={ageValue}>
                </div>
                <div>
                    <span style="font-size: 24px;">Порода:</span>
                    <input class="int2" type="text" bind:value={breedValue}>
                </div>
            </div>
            <textarea class="int3 mb-2" placeholder="История" bind:value={storyValue}></textarea>
            <textarea class="int4" placeholder="Информация" bind:value={aboutValue}></textarea>
        </div>
    </div>
</OutInsBackground>

<style>
    .image_int{
        background: #EBEBEB;
        font-size: 24px;
        border: 1px black solid;
        width: 415px;
    }
    .int{
        background: #EBEBEB;
		font-size: 32px;
        font-weight: bold;
        width: 150px;
        height: 32px;
		border: 1px black solid
    }

    .int2{
        background: #EBEBEB;
		font-size: 24px;
        width: 120px;
        height: 24px;
		border: 1px black solid
    }

    .int3{
        background: #EBEBEB;
		font-size: 24px;
        width: 300px;
        height: 100px;
		border: 1px black solid
    }

    .int4{
        background: #EBEBEB;
		font-size: 24px;
        width: 300px;
        height: 265px;
		border: 1px black solid
    }
</style>