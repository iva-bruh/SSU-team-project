<div class="container mx-auto grid grid-cols-12">
    <div class="outside_background col-start-2 col-end-12">
        <div class="inside_background">
            <slot />
        </div>
    </div>
</div>

<style>
    .outside_background{
        height: 743px;
        background: #EBEBEB;
        border-radius: 10px;
        margin: 50px 0;
        padding: 55px 110px;
    }

    .inside_background{
        height: 633px;
        background: white;
        border-radius: 5px;
    }

</style>
