<script>
    export let id;
    export let image;
    export let type;
    export let name;
    export let sex;
    export let age;
    export let breed;
    export let story;
    export let about;
    
	import OutInsBackground from "../OutInsBackground.svelte";
	import PinkButton from "../commons/PinkButton.svelte";
	import AnimalCardId from "../commons/AnimalCardID.svelte";
</script>

<OutInsBackground>
    <div class="flex justify-between p-4">
        <a href="/animals"><PinkButton /></a>
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
            <img style="width: 415px; height: 415px; border-radius: 10px; margin-bottom: 28px;" src={image} alt="">
            <!-- <input class="image_int" placeholder="Путь изображения" type="text" bind:value={imageValue}> -->
            <span style="white-space: pre; font-size: 24px; color: #51C9C2; font-weight: bold; margin-bottom: -8px;">При звонке скажите номер</span>
            <span style="white-space: pre; font-size: 24px; color: #51C9C2; font-weight: bold;">карточки животного</span>
        </div>
        <div class="flex flex-col">
            <div class="flex gap-1 mb-2">
                <span style="font-size: 32px;">{type}</span>
                <span style="font-size: 32px;">{name}</span>
                <!-- <input class="int" placeholder="Вид" type="text" bind:value={typeValue}>
                <input class="int" placeholder="Имя" type="text" bind:value={nameValue}> -->
            </div>
            <div class="flex flex-col">
                <div>
                    <span style="font-size: 24px;">{sex}</span>
                    <!-- <span style="font-size: 24px;">Пол:</span>
                    <input class="int2" type="text" bind:value={sexValue}> -->
                </div>
                <div>
                    <span style="font-size: 24px;">{age}</span>
                    <!-- <span style="font-size: 24px;">Возраст:</span>
                    <input class="int2" type="text" bind:value={ageValue}> -->
                </div>
                <div>
                    <span style="font-size: 24px;">{breed}</span>
                    <!-- <span style="font-size: 24px;">Порода:</span>
                    <input class="int2" type="text" bind:value={breedValue}> -->
                </div>
            </div>
            <span style="font-size: 24px; width: 300px; height: 100px;">{story}</span>
            <span style="font-size: 24px; width: 300px; height: 265px;">{about}</span>
            <!-- <textarea class="int3 mb-2" placeholder="История" bind:value={storyValue}></textarea>
            <textarea class="int4" placeholder="Информация" bind:value={aboutValue}></textarea> -->
        </div>
    </div>
</OutInsBackground>