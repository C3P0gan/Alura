<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <button type="submit" class="btn btn-primary brn-block">Logar</button>
            <router-link :to="{ name: 'novo.usuario' }">
                Não possui um cadastro? Cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>

<script>
export default {

    data () {

        return {

            usuario: {},
            errorMessage: ''
        }
    },

    methods: {

        efetuarLogin () {

            this.$store.dispatch('efetuarLogin', this.usuario)
                .then(() => {
                    this.$router.push({ name: 'gerentes' });
                    this.errorMessage = '';
                })
                .catch(err => {
                    if (err.request.status === 401) {
                        this.errorMessage = 'Login ou senha inválido(s).'
                    }
                });
        }
    }
};
</script>