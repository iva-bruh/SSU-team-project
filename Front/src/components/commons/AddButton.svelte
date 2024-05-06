<button class={`AddButton ${$$props.class}`} on:click>
    <slot />
</button>

<style>
    .AddButton{
        width: 195px;
        height: 50px;
        font-size: 24px;
        border-radius: 5px;
        border: none;
        background: #04DF00;
    }
</style>