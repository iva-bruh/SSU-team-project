<script>
	import ButtonPink from "../commons/ButtonPink.svelte";
</script>

<div class="container mx-auto grid grid-cols-12">
    <div class="kibtext col-start-1 col-end-5 mt-24 relative mr-5">
        <span style="font-size: 32px; padding: 20px 147px 0px 146px;">Забрать</span>
        <div style="padding: 25px 85px 0px 85px;">
            <span style="font-size: 24px;">В нашем приюте Вы можете взять любого питомца, который нуждается в любви и заботе</span>
        </div>
        <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
            <a href="/animals"><ButtonPink /></a>
        </div>
    </div>


    <div class="kib col-start-5 col-end-9 my-24 mr-5">
        <img style="width: 100%; height: 415px; " src="images/хаски.png" alt="">
    </div>

    <div class="kibtext col-start-9 col-end-13 mt-24 relative">
        <span style=" font-size: 32px; padding: 20px 169px 0px 168px;">Уход</span>
        <div style="padding: 25px 85px 0px 85px;">
            <span style="font-size: 24px;">Если вы взяли животное и не знаете, как за ним ухаживать, на сайте нашего приюта вы можете найти советы по уходу</span>
        </div>
        <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
            <a href="/care"><ButtonPink /></a>
        </div>
    </div>

    <div class="kib col-start-1 col-end-5 mt-9 mr-5">
        <img style="width: 100%; height: 415px; " src="images/попугай глав.png" alt="">
    </div>

    <div class="kibtext col-start-5 col-end-9 mt-9 mr-5 relative">
        <span style="font-size: 32px; padding: 20px 131px 0px 130px;">Принести</span>
        <div style="padding: 25px 83px 0px 83px; ">
            <span style=" font-size: 24px;">Если Вы нашли бездомное животное, которому нужна помощь, свяжитесь с нами, и мы поможем найти ему дом</span>
        </div>
        <div class="absolute bottom-4 left-[50%] translate-x-[-50%]">
            <a href="#contact1"><ButtonPink /></a>
        </div>
    </div>

    <div class="kib col-start-9 col-end-13" style="margin-top: 35px;">
        <img style="width: 100%; height: 415px; " src="images/хомяк глав.png" alt="">
    </div>

</div>




<style>  
    .kib{
        height: 415px;
        background: #EBEBEB;
        border-radius: 10px;
    }
    .kibtext{
        height: 415px;
        text-align: center;
        background: #EBEBEB;
        border-radius: 10px;
    }
</style>