<template>
    <div class="signup-page">
        <div class="form-container">
            <h2>Sign In</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="formFields.email" required class="border border-black"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="formFields.password" required class="border border-black"/>
                </div>
                <!-- <p v-if="formFields.error">{{ formFields.error }}</p> -->
                <button type="submit" class="border border-black">Sign In</button>
                <p v-if="formFields.error" class="text-red-500">{{formFields.error}}</p>
                <p class="text-gray-500">Create a acoount <span class="text-purple-600"><RouterLink :to="{name: 'Signup'}"> Sign Up</RouterLink></span></p>
            </form>
        </div>
    </div>
</template>
 
<script>
import {ref, reactive} from 'vue'
import {useFirebaseAuth, useCurrentUser, getCurrentUser} from 'vuefire'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { useRouter } from 'vue-router'
export default {
    setup(){
        const auth = useFirebaseAuth()
        const router = useRouter()
        // console.log(auth)
        const formFields = reactive({
            email: '',
            password: '',
            error: ''
        })

        
        async function login() {
            const auth = getAuth();
            try {
                await signInWithEmailAndPassword(auth, formFields.email, formFields.password);
                // User is now signed in
                // Do any further processing here
                if(formFields.error) formFields.error = ''
                router.push('/')
            } catch (error) {
                formFields.error = error.message
                console.log(error);
            }
        }


        return {
            formFields,
            login
        }
    } 
}
</script>


<style scoped>
.signup-page {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid #7857ff;
  border-radius: 20px;
  background-color: #f0f4f8;
  box-shadow: 0px 0px 20px rgba(120, 87, 255, 0.2);
  text-align: center;
}
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #7857ff;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #7857ff;
  font-size: 1.2rem;
}

input[type="email"],
input[type="password"] {
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #7857ff;
}

button[type="submit"] {
  padding: 0.7rem 2rem;
  font-size: 1rem;
  background-color: #7857ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #6345c8;
}

@media (max-width: 480px) {
  .signup-page {
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  input[type="email"],
  input[type="password"] {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  button[type="submit"] {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>