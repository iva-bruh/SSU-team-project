
<script>
    import BirButton from "../components/commons/BirButton.svelte";
</script>

<div>
    <div class="container mx-auto grid grid-cols-12">
        <div class="slog col-start-1 col-end-7">
            <b style="font-size: 40px; align:center; ">Спасаем лапки, дарим любовь! ХвостатыйДом - второй шанс любого животного!</b>
        </div> 
        <div class="cont col-start-3 col-end-4">
            <BirButton>Контакты</BirButton>
        </div>
        <p id="dscdd"> </p>
        <div class="dog col-start-8 col-end-13">
            <img style="width: 525px; height: 525px; margin-top:-311px;" src="images/собака глав.png" alt="">
        </div>

        <div class="pom col-start-4 col-end-9">
        <b style="font-size: 32px;">В нашем приюте Вы можете</b>
        </div>
    </div>

    <div class="container mx-auto grid grid-cols-3">
        <div class="kibtext col-start-1"style="margin-top: 102px;">
            <h1 style=" font-size: 32px; padding: 20px 147px 20px 146px;">Забрать</h1>
            <div style="padding: 20px 85px 71px 85px;">
            <span style="font-size: 24px;">В нашем приюте Вы можете взять любого питомца, который нуждается в любви и заботе</span>
            </div>
            <div style="padding:0px 178px 72px 177px">
                <img style="width: 60px; height: 60px;" src="images/Кнопка.png" alt="">
            </div>
        </div>
        <div class="kib col-start-2" style="margin-top: 102px;">
            <img style="width: 415px; height: 415px; " src="images/хаски.png" alt="">
        </div>
        <div class="kibtext col-start-3" style="margin-top: 102px;">
            <h1 style=" font-size: 32px; padding: 20px 169px 20px 168px;">Уход</h1>
            <div style="padding:  20px 85px 21px 85px;">
            <span style=" font-size: 24px;">Если вы взяли животное и не знаете, как за ним ухаживать, на сайте нашего приюта вы можете найти советы по уходу</span>
            </div>
            <div style="padding:0px 178px 72px 177px">
                <img style="width: 60px; height: 60px;" src="images/Кнопка.png" alt="">
            </div>
        </div>
        <div class="kib col-start-1" style="margin-top: 35px;">
            <img style="width: 415px; height: 415px; " src="images/попугай глав.png" alt="">
        </div>
        <div class="kibtext col-start-2" style="margin-top: 35px;">
            <h1 style=" font-size: 32px; padding: 20px 131px 20px 130px;">Принести</h1>
            <div style="padding: 20px 85px 20px 85px; ">
            <span style=" font-size: 24px;">Если Вы нашли бездомное животное, которому нужна помощь, свяжитесь с нами, и мы поможем найти ему дом</span>
            </div>
            <div style="padding:0px 178px 72px 177px">
                <img style="width: 60px; height: 60px;" src="images/Кнопка.png" alt="">
            </div>
        </div>
        <div class="kib col-start-3" style="margin-top: 35px;">
            <img style="width: 415px; height: 415px; " src="images/хомяк глав.png" alt="">
        </div>

    </div>
</div>



<style>
    .slog{
        margin-top:265px;
        text-align:center;
        display: grid;
        align-items:end;
        
    }
    .cont {
        width: 195px;
        height: 50px;
        font-size: 24px;
        background: #51C9C2;
        border-radius: 5px;
        border: none;
        text-align: center;
        margin-top: 50px;
    }
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
    .pom{
        margin-top: 245px;
        width: 635px; 
        text-align:center;

    }
</style>
        
    
