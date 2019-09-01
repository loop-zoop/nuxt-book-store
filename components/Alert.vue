<template>
    <div class='alert'>
        <p>{{this.$store.state.orders.orderMessage}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        background: #ffc107;
        width: 30%;
        position: fixed;
        bottom: 1%;
        right: 2%;
        p {
            color: #000;
            padding: 0;
            margin: 0;
        }
    }
</style>
