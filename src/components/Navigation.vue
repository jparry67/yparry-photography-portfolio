<template>
    <div class="navigation">
        <div class="mobile nav" :class="{scrolled: scrollPosition > 0}">
            <div id="logo">Y Parry Photography</div>
            <div class="drop-down-container" @click="showDropDown = !showDropDown">
                <menu-icon class="menu-icon" />
                <div class="drop-down" v-if="showDropDown">
                    <router-link to="/">Home</router-link>
                    <div @click.stop="showPortfolioOptions = !showPortfolioOptions" class="portfolio">
                        <span>Portfolio</span>
                        <chevron-right-icon v-if="!showPortfolioOptions"/>
                        <chevron-down-icon v-if="showPortfolioOptions"/>
                    </div>
                    <div class="portfolio-menu-items" v-if="showPortfolioOptions">
                        <router-link to="/portraits">Portraits</router-link>
                        <router-link to="/couples">Couples</router-link>
                        <router-link to="/families">Families</router-link>
                    </div>
                    <router-link to="/prices">Prices</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
        <div class="desktop nav" :class="{scrolled: scrollPosition > 0}">
            <router-link to="/">Home</router-link>
            <div class="drop-down-container" @mouseover="showPortfolioDropDown = true" @mouseleave="showPortfolioDropDown = false">
                <div class="portfolio">
                    <span>Portfolio</span>
                    <chevron-right-icon v-if="!showPortfolioDropDown"/>
                    <chevron-down-icon v-if="showPortfolioDropDown"/>
                </div>
                <div class="drop-down portfolio-menu" v-if="showPortfolioDropDown">
                    <router-link to="/portraits">Portraits</router-link>
                    <router-link to="/couples">Couples</router-link>
                    <router-link to="/families">Families</router-link>
                </div>
            </div>
            <div id="logo">Y Parry Photography</div>
            <router-link to="/prices">Prices</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import 'vue-material-design-icons/styles.css';

@Component({
    components: { MenuIcon, ChevronRightIcon, ChevronDownIcon },
})
export default class Navigation extends Vue {
    showPortfolioDropDown: boolean = false;
    showDropDown: boolean = false;
    showPortfolioOptions: boolean = false;
    scrollPosition: number = 0;
    updateScroll(): void {
        this.scrollPosition = window.scrollY;
    }
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<style scoped lang="scss">
@import "@/variables.scss";
.navigation {
    position: sticky;
    top: 0;
    z-index: 10;
    .nav {
        padding: 15px 30px;
        box-shadow: 0 0 5px #cccccc;
        place-items: center;
        background-color: white;
        a, .portfolio, .menu-icon {
            font-weight: bold;
            color: $blue;
            text-decoration: none;
            text-transform: uppercase;
            // font-family: 'Playfair Display', serif;
            cursor: pointer;
            display: flex;
            align-items: center;

            &:hover, &.router-link-exact-active {
                color: $red;
            }
        }
        #logo {
            font-family: 'Sacramento', cursive;
            color: $red;
            font-size: 30px;
            cursor: pointer;
        }
        .drop-down {
            box-shadow: 0 0 3px #999999;
            position: absolute;
            top: 55px;
            padding: 20px;
            background-color: #fafafa;
            display: grid;
            gap: 20px;
            .portfolio-menu-items {
                display: grid;
                gap: 20px;
                margin-left: 40px;
            }
        }
        .material-design-icon > .material-design-icon__svg {
            height: 24px;
            width: 24px;
            cursor: pointer;
        }
        &.mobile {
            display: none;
            menu-icon {
                color: $blue;
            }
            .drop-down {
                width: 170px;
                right: 0;
                top: 74px;
                display: grid;
                place-items: center left;
            }
        }
        &.desktop {
            padding: 30px 100px;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 3fr 3fr 8fr repeat(3, 2fr);

            .drop-down-container {
                position: relative;
                height: 100%;
                display: grid;
                place-items: center;  
            }
            #logo {
                font-size: 40px;
            }
        }
        @media screen and (max-width: $breakpoint-large) {
            &.mobile {
                display: flex;
                justify-content: space-between;
            }
            &.desktop {
                display: none;
            }
        }
        &.scrolled {
            // padding: 15px;
            // #logo {
            //     font-size: 30px;
            // }
            // background-color: $cream;
        }
    }
}
</style>
