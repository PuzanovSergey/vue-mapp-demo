<template lang="pug">
    .vm-radio(
        @click="click"
    ) asfsdafsadf
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'test-radio',
    // model: {
    //     prop: 'model',
    //     event: 'input'
    // }
})
export default class TestRadio extends Vue {

    @Prop() value: any;
    @Prop({ required: true }) marker: any;

    public click() {
        console.log('click', this.marker);
        if (this.value !== this.marker) {
            console.log('CHANGE')
            this.$emit('input', this.marker);
        }
    }
}
</script>