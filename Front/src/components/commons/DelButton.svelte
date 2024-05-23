<button class="DelBtn" on:click>
    <slot />
</button>

<style>
    .DelBtn{
        background: #FF2424;
        border-radius: 5px;
        height: 40px;
        width: 85px;
        border: none;
        font-size: 24px;
    }
</style>