<template>
    <main>
        <BCard
            :header="action.name"
            class="my-2"
        >
        <BForm>
            <div class="row my-2">
                <div class="col-3">
                    <BInputGroup propend="target">
                        <BFormInput placeholder="target"/>
                    </BInputGroup>
                </div>
            </div>
        </BForm>
        </BCard>
    </main>
</template>

<script>
import {BCard, BForm, BInputGroup, BFormInput} from 'bootstrap-vue-next'

export default {
    props: ['action'],
    components: {
        BCard,
        BForm,
        BInputGroup,
        BFormInput,
    }
}
</script>