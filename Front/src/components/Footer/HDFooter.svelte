<footer class="footer">
    <div class="container mx-auto grid grid-cols-4">
        <div class="days col-start-1">
            <span style="font-size: 24px;">Режим работы:</span>
            <span class="day">пн</span>
            <span class="day">вт</span>
            <span class="day">ср    9:00-20:00</span>
            <span class="day">чт</span>
            <span class="day">пт</span>
            <span class="day">сб    10:00-18:00</span>
            <span style="height: 36px;" class="day">вс    выходной</span>
        </div>
        <div class="footer_item col-start-2">
            <img src="/images/footer-line.svg" alt="">
            <div class="footer_item-components">
                <img style="width: 87px; height: 85px;" src="/images/footer_image-konvert.svg" alt="">
                <span style="font-size: 24px;">MAIL</span>
                <a style="font-size: 24px; color: white; text-decoration: none; border-bottom: 1px white solid;" href="https://mail.ru/">hvostatiy_dom@mail.ru</a>
            </div>
        </div>
        <div class="footer_item col-start-3">
            <img src="/images/footer-line.svg" alt="">
            <div id="contact1" class="footer_item-components">
                <img style="width: 87px; height: 85px;" src="/images/footer_image-tel.svg" alt="">
                <span style="font-size: 24px;">CALL</span>
                <span style="font-size: 24px; color: white;">+7 912 345-67-89</span>
            </div>
        </div>
        <div class="footer_item col-start-4">
            <img src="/images/footer-line.svg" alt="">
            <div class="footer_item-components">
                <img style="width: 87px; height: 85px;" src="/images/footer_image-adres.svg" alt="">
                <span style="font-size: 24px;">ADDS</span>
                <span style="font-size: 24px; color: white;">Энергетиков, д.22, к.У</span>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer{
        display: flex;
        align-items: center;
        height: 300px;
        background: #FF4593;
    }

    .footer_item{
        display: flex;
        justify-content: center;
        gap: 29px;
    }

    .footer_item-components{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .days{
        display: flex;
        flex-direction: column;
    }

    .day{
        white-space: pre;
        color: white;
        font-size: 24px;
    }
</style>