<template>
  <q-layout view="Hhh lpR fff">
    <q-header reveal elevated height-hint="98">
      <q-toolbar :style="'background-color:' + this.colorTheme">
        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
        <q-toolbar-title>Central de Vendas Web</q-toolbar-title>
        <q-btn round>
          <q-avatar size="44px" class="bg-white">
            <img style="width: 40px; height: 40px" src="../assets/k10Logo.jpg">
          </q-avatar>
          <q-menu>
            <div class="perfil row no-wrap q-py-lg justify-center">
              <div class="column items-center">
                <q-avatar size="90px">
                  <img src="../assets/k10Logo.jpg">
                </q-avatar>
                <h4 class="q-mt-md q-mb-xs">K10 Sports</h4>
                <q-separator color="black" inset size="30px"/>
                <p class="q-mb-xs">Defina sua cor de tema:</p>
                <q-color
                  v-model="colorTheme"
                  default-view="palette"
                  no-footer
                  no-header
                  :palette="[
                    '#d60000','#d66c00',
                    '#d9b801','#005c00',
                    '#00005c','#019a9d',
                    '#e8045a','#2d0849',
                    '#666666','#000000',
                  ]"
                  class="my-picker"
                />
                <q-separator color="black" inset size="30px"/>
                <q-btn
                  style="color: red"
                  outline
                  label="Logout"
                  dense
                  size="md"
                  v-close-popup
                  class="q-my-lg q-px-md"
                  @click="logout"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
        <!-- Opção de publicar a versão da Aplicação na NavBar
          <p class="">v.{{ AppVersion }}</p>
        -->
      </q-toolbar>
      <!-- Opção de TABS abaixo da NavBar
      <q-tabs align="left" v-model="tab">
        <q-tab>
          <span class="text-capitalize">
            K10 Sport
          </span>
        </q-tab>
        <q-route-tab
          class="text-capitalize"
          v-for="(menu, index) in menus"
          :key="(menu, index)"
          :name="menu.name"
          :icon="menu.icon"
          :label="menu.label"
          :to="menu.route"
        />
      </q-tabs>
      -->
    </q-header>

      <!-- :content-class="'background-color: ' + this.colorTheme" -->
      <!-- :style="'background-color:' + this.colorTheme" -->
    <q-drawer
      :content-style="'background-color:' + this.colorTheme"
      v-model="drawer"
      show-if-above
      mini-to-overlay
      elevated
      :width="270"
      :breakpoint="500"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list padding>
        <!-- Opção de inserir LOGO e NOME da empresa no Drawer
        <q-item-section v-if="!miniState">
          <q-avatar size="55px" class="bg-white">
            <img style="width: 50px; height: 50px" src="../assets/k10Logo.jpg" />
          </q-avatar>
          <q-toolbar-title class="text-white text-h5 q-mb-lg">
            K10 Sport
          </q-toolbar-title>
          <q-separator color="white" class="q-mb-lg q-mx-xl" />
        </q-item-section>
        -->
        <q-item
          clickable
          v-ripple
          class="text-white"
          v-for="(menu, index) in menus"
          :key="(menu,index)"
          @click="drawClick(menu.name)"
        >
          <q-item-section avatar>
            <q-avatar size="50px" >
              <q-icon :name="menu.icon" />
            </q-avatar>
          </q-item-section>
          <q-item-section side class="text-white captalize">
            {{ menu.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
//import { version } from "../../package.json";
export default {
  data() {
    return {
      miniState: true,
      drawer: false,
      colorTheme: '#2d0849',
      //tab: null,  --> Esta função apenas será reativada caso queira exibir a TabBar
      menus: [
        {icon: "home", name: "home", label: "Página Inicial", route: "/home"},
        {icon: "shopping_basket", name: "sells", label: "Vendas", route: "/sells"},
        {icon: "list_alt", name: "orders", label: "Pedidos", route: "/orders" },
        {icon: "groups", name: "nets", label: "Redes Sociais", route: "/nets"},
        {icon: "category", name: "warehouse", label: "Controle de Estoque", route: "/warehouse"},
        {icon: "assignment_ind", name: "clients", label: "Cadastro de Clientes", route: "/clients"},
        {icon: "receipt_long", name: "debts", label: "Cadastro de Despesas", route: "/debts"}
      ]
    }
  },
  computed: {
    /* Apenas será reativada caso desejemos que a versão seja exibida na NavBar
    AppVersion() {
      return version;
    },
    */
    isMobile() {
      return (this.$q.screen.sm || this.$q.screen.xs); //Retorna Booleano
    }
  },
  methods: {
    drawClick(menu) {
      this.menus.forEach(i => {
        if( i.name === menu ) {
          if( i.route !== this.$router.app._route.path ) {
            this.$router.push(i.route);
            this.miniState = false;
            this.drawer = false;
          }
        }
      });
    },
    logout() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.perfil {
  width: 250px;
  height: auto;
}
</style>
