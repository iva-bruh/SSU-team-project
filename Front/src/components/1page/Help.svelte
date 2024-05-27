
<script>
    import HelpButton from "../commons/HelpButton.svelte";
</script>

<div style="margin-top: 150px; background: #51C9C2;height: 206px; position: relative; width: 100vw; text-align: center;;">
    <span style="font-size:32px;">Помощь приюту</span>
    <HelpButton/>
</div>

<div class="container mx-auto grid grid-cols-12">
    <div class="col-start-1 col-end-6" style="margin-top: 135px;">
        <img src="images/кошка глав.png" alt="">
    </div> 
    <div class="help_text col-start-7 col-end-13" style="margin-top: 122px;">
        <span>Что можно принести?
    - Хорошие корма (примеры хороших фирм можете посмотреть на страничке уход)
    - Безопасные игрушки
    - Домики и другие конструкции для удобства животных
    - Миски, лотки
    - Базовые лекарства для профилактики, витамины
Большое спасибо!</span>
    </div>
    <div class="col-start-2" style="margin-top: 150px; background: #51C9C2;height: 80px; width: 934px; text-align: center; border-radius: 50px;">
        <span style="font-size:32px;">Помогайте животным! Делайте мир лучше!</span>
    </div> 
    <div class="pictures col-start-1 col-end-4">
        <img src="images/киса 1.png" alt="">
    </div>
    <div class="pictures col-start-4 col-end-7">
        <img src="images/ежик 1.png" alt="">
    </div> 
    <div class="pictures col-start-7 col-end-10">
        <img src="images/собака 1.png" alt="">
    </div> 
    <div class="pictures col-start-10 col-end-13">
        <img src="images/хомяк 1.png" alt="">
    </div> 
</div>

<style>
    .pictures {
        margin: 139px 25px 170px 0;
    }
    .help_text {
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        font-size: 32px;
        margin: 0 0 50px 0;
        
    }
</style>