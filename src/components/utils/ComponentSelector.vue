<template>
    <div>
        <ul>
            <li v-for="tab in tabs" :key="tab.title" @click="selectTab(tab)" :class="{ active: activeTab == tab }">
                <card-title>{{ tab.title }}</card-title>
            </li>
        </ul>
        <component :is="component"></component>
    </div>
</template>

<script>
    import CardTitle from '@/components/core/card/CardTitle';

    export default {
        name: "component-selector",
        props: {
            tabs: { type: Array, default: [] },
        },
        data() {
            return {
                activeTab: undefined,
                component: undefined
            };
        },
        created() {
            if(this.tabs.length > 0)
                this.selectTab(this.tabs[0]);
        },
        methods: {
            selectTab(tab) {
                this.activeTab = tab;
                this.component = tab.component;
            }
        },
        components: {
            "card-title": CardTitle
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        margin: 0;
        list-style-type: none;

        li {
            margin: 0 1rem .8rem 0;
            display: inline-block;
            cursor: pointer;
            user-select: none;
            border-bottom: 3px solid transparent;
            background-color: transparent;
            transition: .2s;
            border-radius: 3px;

            .card-title {
                padding: 0 .8rem;
            }

            &.active {
                border-bottom: 3px solid #156DAD;
                background-color: #399BDB;
            
                .card-title {
                    display: block;
                    color: white;
                }
            }

            &:hover {
                border-bottom: 3px solid #156DAD;
            }
        }
    }
</style>
