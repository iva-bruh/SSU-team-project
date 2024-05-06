
<button class="button arrow"></button>

<style>
    .button{
    background: #FF4593;
    width: 60px;
    height: 60px;
    border-radius: 50%; 
}
.arrow {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.arrow:after {
    position: absolute;
    top: 25.2px;
    right: 17px;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-left: 3px solid #ffffff;
    border-bottom: 3px solid #ffffff;
    transform: rotate(225deg);
}
.arrow:before {
    content: '';
    position: absolute;
    width: 26px;
    height: 2.5px;
    top: 29.24px;
    left: 18px;
    background-color: #ffffff;
    }
</style>