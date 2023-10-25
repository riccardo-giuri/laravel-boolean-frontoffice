<script>
import axios from "axios";

export default {
  data() {
    return {
      formContact: {
        name: "",
        email: "",
        message: "",
      },
      dataSendSuccess: null,
    };
  },
  methods: {
    onClickForm() {
      axios
        .post("http://127.0.0.1:8000/api/contacts", this.formContact)
        .then((response) => {
          this.dataSendSuccess = response.data.message;
          console.log(response.data.dataContact);
        });
    },
  },
};
</script>

<template>
  <div class="container">

    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <h1 class="contacts">Contattaci</h1>
        </div>

        <div class="col-8">
          <form @submit.prevent="onClickForm">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="formContact.name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="formContact.email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputText" class="form-label">Messaggio</label>
              <textarea
                type="text"
                class="form-control"
                id="exampleInputText"
                rows="10"
                v-model="formContact.message"
              ></textarea>
            </div>

            <div class="d-flex align-items-center gap-4">
              <button type="submit" class="btn btn-primary rounded-pill customBtn">Invia</button>
              <div v-if="dataSendSuccess" class="responseMsg">{{ dataSendSuccess }}</div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type=text]{
  font-size: 40px;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid white;

  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
  font-size: 40px;
  letter-spacing: 0.24px;
}

input[type=text]:focus-visible{
  outline: 0;
}

input[type=email]{
  font-size: 40px;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid white;

  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
  font-size: 40px;
  letter-spacing: 0.24px;
}

input[type=email]:focus-visible{
  outline: 0;
}

.form-control{
  padding: 8px 0px;
}

.form-control:focus{
  color: white;
  box-shadow: none;
  outline: 0;
}

textarea{
  background-color: transparent;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid white;

  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
  font-size: 24px;
}

textarea:focus{
  background-color: transparent;
}

textarea:focus-visible{
  outline: 0;
}

.form-label{
  text-transform: uppercase;
  font-family: 'Karla', serif;
  font-weight: 500;
  color: #D1B875;
  font-size: 14px;
}

.col-4{
  padding: 0;
  margin: 0;
}

.customBtn{
  background-color: #D1B875;
  padding: 16px 32px;
  color: black;
  text-transform: uppercase;
  border: 0;
}

.contacts{
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: white;
  font-size: 56px;
  line-height: 100%;
}

.container-fluid {
  margin-top: 80px;
}

.responseMsg{
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  color: #D1B875;
  font-size: 16px;
}
</style>
