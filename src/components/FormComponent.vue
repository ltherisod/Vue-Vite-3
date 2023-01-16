<script setup>
import {ref} from 'vue'
import { useUserStore } from '../store/userStore';
import { toast } from 'vue3-toastify';
import {useRouter} from 'vue-router'
const router = useRouter()
const data = useUserStore();
    const name= ref("")
    const email= ref("")
    const telefone= ref("")
    const img= ref("")
    const country= ref("")
    const address= ref("")
    const subscribe= ref(false)
    const terms= ref(false)
    const  password= ref("")
    const secondpass= ref("")
    const errors= ref([]) 
    const countryList= [
        "Argentina",
        "Bahrain",
        "Bangladesh",
        "Brazil",
        "Chad",
        "Chile",
        "China",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Ecuador",
        "Egypt",
        "Finland",
        "France",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guyana",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Korea",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Panama",
        "Paraguay",
        "Peru",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Samoa",
        "Slovenia",
        "Thailand",
        "Togo",
        "Tokelau",
        "Tonga",
        "Tunisia",
        "Turkey",
        "Uruguay",
        "Venezuela",
      ];
    
    const userData = () => {
      if (
        name.value.length > 5 ||
        telefone.value.length > 8 ||
        email.value.length>5 ||
        img.value.length > 8 ||
        address.value.length > 2 ||
        terms.value === true ||
        password.value.length > 6 ||
        password.value === secondpass.value ||
        country.value
      ) {
        let newUser = {
          name: name.value,
          email:email.value,
          telefone:telefone.value,
          img:img.value,
          country:country.value,
          address:address.value,
          subscribe:subscribe.value,
          terms:terms.value,
          password:password.value,
        };
        data.postUsers(newUser)
        console.log(newUser)
        toast.success(`Excellente user ${name.value} added!`)
        console.log('user', newUser)
        router.push('/')
        
        return true;
      }
      if (name.value === '') {
        toast.error("Please complete this field");
      }
      if (name.value.length < 5) {
        toast.error("Your name is too short!");
      }

      if (address.value.length < 3) {
        toast.error("Please complete a valid address");
      }
      if (telefone.value.length < 8) {
        toast.error("Please complete a valid phone number");
      }
      if (email.value==='') {
        toast.error("Please complete with a valid email");
      }
      if (terms.value === false ) {
        toast.error("Please accept our terms to continue");
      }
      if (password.value.length < 10) {
        toast.error("Your password is too poor");
      }
       if (password.value!== secondpass.value) {
        toast.error("Your passwords doesn't match");
      }
      if (country.value === '') {
        toast.error("Please select your country");
      }
       console.log('nope')
    }
</script>
<template>
    <div class="containerdiv">
      <h2>Please Complete de Form</h2>
      <form id="formdata" action="" @submit.prevent="userData" class="w-50">
        <label for="name" class="text-start">Complete Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Complete Name"
        />
        <p>
          <label for="email" class="form-label text-start">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="neko@sushi.com"
          />
          <label for="telefone" class="form-label text-start">Phone number</label>
          <input
            v-model="telefone"
            type="number"
            class="form-control"
            id="telefone"
            placeholder="54 224 4567895"
          />
          <label for="img" class="form-label text-start">Profile Picture</label>
          <input
            v-model="img"
            type="text"
            class="form-control"
            id="img"
            placeholder="https://myprofilepic.com"
          />
          <label for="countrySelector">Please select your country</label>
          <select
            v-model="country"
            name="countrySelector"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected></option>
            <option v-for="country in countryList" :key="country" :value="country">
              {{ country }}
            </option>
          </select>

          <label for="address" class="form-label text-start">Delivery Address</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="address"
            placeholder="Fake Street 1234"
          />
          <br />
          <label for="password" class="form-label text-start">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Your Password has to be 10 caracters long"
          />
          <br />
          <label for="secondpass" class="form-label text-start">
            Repeat you password</label
          >
          <input
            v-model="secondpass"
            type="password"
            class="form-control"
            id="secondpass"
            placeholder="Repeat your password"
          />
          <br />
        </p>

        <div class="d-flex justify-content-between" style="width: 70%">
          <p><strong>Do you want tu subscribe to out newsteller?</strong></p>
          <div>
            <label for="subscribe" class="ml-5">✔️Yes!</label>
            <input
              v-model="subscribe"
              type="checkbox"
              name="subscribe"
              class="form-check-input ml-5"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between" style="width: 70%">
          <p>Please accept terms and policity of neko</p>
          <div>
            <label for="terms"> ✔️Yes!</label>
            <input
              v-model="terms"
              type="checkbox"
              name="terms"
              class="form-check-input"
            />
          </div>
        </div>
        <hr />
        <div class="col-2">
          <input type="submit" class="btn btn-dark" value="SEND" />
        </div>
      </form>
    </div>
</template>



<style scoped>
</style>