<template>
  <section class="mx-auto px-4 py-8 md:px-12 md:py-12 lg:px-42 xl:px-80">
    <div class="border-primary-300 rounded-lg bg-gray-50 p-8 shadow-sm">
      <h3 class="h3 mb-4 text-center text-2xl font-bold md:text-3xl">
        Join My Mailing List
      </h3>
      <p class="description mb-6 text-center text-lg">
        Stay updated with my latest performances, music releases, and exclusive content.
      </p>
      <form class="mx-auto max-w-md">
        <div class="mb-4 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Your email address"
            required
            class="focus:border-primary-500 focus:ring-primary-200 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none sm:flex-1"
          />
          <button
            @click="submitForm"
            :disabled="loading"
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-6 py-3 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            {{ loading ? "Sending..." : "Subscribe" }}
          </button>
        </div>
        <p v-if="successMessage" class="text-center text-sm pb-2 text-success-foreground">
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="text-center text-sm pb-2 text-error">
          {{ errorMessage }}
        </p>
        <p class="text-center text-sm text-gray-500">
          I respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";
  console.log("submitForm");
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email: email.value }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("res", res);
    const data = await res.json();
    if (res.ok) {
      successMessage.value = "Thanks for subscribing!";
      email.value = "";
      console.log("res.ok");
    } else {
      errorMessage.value = data.error || "Something went wrong.";
      console.log("res.not ok");
    }
  } catch (err) {
    errorMessage.value = "Network error.";
    console.log("err", err);
  } finally {
    console.log("finally");
    loading.value = false;
  }
};
</script>
