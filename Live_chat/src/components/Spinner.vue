<template>
  <div class="spin"></div>
</template>

<style>
.spin{
    width:40px;
    height: 40px;
    border:5px solid transparent;
    border-radius: 50%;
    border-top-color: coral;
    animation: spin 1s ease infinite;
    margin: 30px auto;

}
@keyframes spin {
    to{ transform: rotate(360deg);}
    
}
</style>