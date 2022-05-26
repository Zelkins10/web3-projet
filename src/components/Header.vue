<template>
    <div class="header">
        <h1>Star Wars Database</h1>
            <img id=swLogo alt="Star Wars logo" src="../assets/Star-Wars-Logo.png"
                width= 25%
                height= auto>
    </div>
</template>

<script>
export default {
      name: 'SWHeader'
}
</script>

<style>

    .header{
        color:rgb(255, 233, 25);
        font-size: 2vw;
        font-family: 'Lato';
        /* position: fixed; */
    }
    
    @media screen and (max-width: 600px){
        h1{
            font-size: 30px;
        }
           
        #swLogo{
            width: 200px;
        }  
    }

</style>