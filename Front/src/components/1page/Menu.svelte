<script>
    import ButtonPink from "./ButtonPink.svelte";
</script>

<div class="container mx-auto grid grid-cols-3">
    <div class="kibtext col-start-1"style="margin-top: 102px;">
        <span style=" font-size: 32px; padding: 20px 147px 0px 146px;">Забрать</span>
        <div style="padding: 40px 85px 0px 85px;">
            <span style="font-size: 24px;">В нашем приюте Вы можете взять любого питомца, который нуждается в любви и заботе</span>
        </div>
        <div style="margin-top: 54px;">
            <a href="/animals" ><ButtonPink /></a>
        </div>
    </div>


    <div class="kib col-start-2" style="margin-top: 102px;">
        <img style="width: 415px; height: 415px; " src="images/хаски.png" alt="">
    </div>

    <div class="kibtext col-start-3" style="margin-top: 102px;">
        <span style=" font-size: 32px; padding: 20px 169px 0px 168px;">Уход</span>
        <div style="padding:  40px 85px 21px 85px;">
            <span style=" font-size: 24px;">Если вы взяли животное и не знаете, как за ним ухаживать, на сайте нашего приюта вы можете найти советы по уходу</span>
        </div>
        <div>
            <a href="/care"><ButtonPink /></a>
        </div>
    </div>

    <div class="kib col-start-1" style="margin-top: 35px;">
        <img style="width: 415px; height: 415px; " src="images/попугай глав.png" alt="">
    </div>

    <div class="kibtext col-start-2" style="margin-top: 35px;">
        <span style=" font-size: 32px; padding: 20px 131px 0px 130px;">Принести</span>
        <div style="padding: 40px 85px 21px 85px; ">
            <span style=" font-size: 24px;">Если Вы нашли бездомное животное, которому нужна помощь, свяжитесь с нами, и мы поможем найти ему дом</span>
        </div>
        <div>
            <a href="#contact1"><ButtonPink /></a>
        </div>
    </div>

    <div class="kib col-start-3" style="margin-top: 35px;">
        <img style="width: 415px; height: 415px; " src="images/хомяк глав.png" alt="">
    </div>

</div>




<style>
   
.kib{
    width: 415px;
    height: 415px;
    background: #EBEBEB;
    border-radius: 10px;
}
.kibtext{
    width: 415px;
    height: 415px;
    text-align: center;
    background: #EBEBEB;
    border-radius: 10px;
}

</style>