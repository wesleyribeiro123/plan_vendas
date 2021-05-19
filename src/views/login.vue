<template>
  <div class="login row justify-center" >
    <div class="container">
      <img src="../assets/logo.png">
      <q-form @submit="Acessar">
        <q-input
          class="q-mx-lg q-mb-lg"
          bottom-slots
          v-model="mail"
          label="E-mail"
          dense
        >
          <!-- :rules="[val => val && isNull(val) || 'Campo de preenchimento obrigatório']" -->
          <template v-slot:prepend>
            <q-icon name="alternate_email" class="icons" />
          </template>
        </q-input>
        <q-input
          class="q-mx-lg q-mb-lg"
          bottom-slots
          v-model="pass"
          label="Senha"
          dense
          :type="isPwd ? 'password' : 'text'"
        >
          <!-- :rules="[val => val && isNull(val) || 'Campo de preenchimento obrigatório']" -->
          <template v-slot:prepend>
            <q-icon name="password" class="icons" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility' : 'visibility_off'"
              @click="isPwd = !isPwd"
              class="iconsView"
            />
          </template>
        </q-input>

        <q-btn
          label="Acessar"
          type="submit"
          class="btns q-mr-lg q-mt-lg"
        />
        <q-btn
          label="Esqueceu a Senha?"
          class="q-ml-lg q-mt-lg"
          flat
          @click="ShowModal"
        />
      </q-form>
      <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Informe seu E-Mail</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            autofocus
            v-model="mailRemmenber"
            @keyup.enter="prompt = false"
          >
            <template v-slot:prepend>
              <q-icon name="alternate_email" class="icons" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat class="textBtn canc" label="Cancelar" v-close-popup />
          <q-btn flat class="textBtn conf" label="Enviar e-mail" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: "",
      pass: "",
      mailRemmenber: "",
      isPwd: true,
      prompt: false
    }
  },
  methods: {
    Acessar() {
      this.$router.push("home");
    },
    ShowModal() {
      this.mailRemmenber = "";
      this.prompt = true;
    }
  }
}
</script>

<style>
.login {
  width: 100vw;
  height: 100vh;

  background: linear-gradient(180deg, rgb(45, 8, 73), rgb(147, 66, 208))
}

.container {
  /*background-color: rgb(225, 212, 235);*/
  background-color: white;

  border-radius: 10px;

  width: 400px;
  height: 500px;

  margin-top: 100px;
}

.container img {
  margin-top: 20px;
  margin-bottom: 20px;

  width: 200px;
  height: 200px;
}

.icons {
  color: rgb(45, 8, 73);
}

.iconsView {
  color: rgb(45, 8, 73, .3);
}

.btns {
  background-color: rgb(45, 8, 73);
  color: white;
}

.canc {
  color: red;
}

.conf {
  color: green;
}
</style>