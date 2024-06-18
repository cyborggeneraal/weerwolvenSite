<template>
  <main>
    <div class="row justify-content-center">
      <div class="h-100"></div>
      <div class="col-4 card mt-5 p-4 border border-dark rounded">
        <div class="card-body">
          <Form @submit="handleLogin" :validation-schema="schema">
            <div class="mb-3">
              <class for="username" class=""form-label>Username</class>
              <Field name="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <Field type="password" class="form-control" name="password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(user) {
      console.log(user);
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) ||
            error.message ||
            error.toString();
        }
      )
    }
  }

}
</script>