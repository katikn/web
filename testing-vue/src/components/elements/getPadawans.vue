<template>
    <p>{{ data.data['test1'] }}</p>
</template>

<script>
import getData from '@/api';
export default {
    data() {
        return {
            data: {}
        }
    },
    beforeCreate() {
        getData().then((data1) => {
            this.data = {
                ...data1
            }
            console.log(this.data);
        })
    }
}
</script>