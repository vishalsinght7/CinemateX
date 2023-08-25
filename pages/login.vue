<script setup>
definePageMeta({
    layout:"custom"
})
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
      <div class="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome Back</h2>
        <form @submit.prevent="login">
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Username</label>
            <input class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="username" v-model="username" />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Password</label>
            <input class="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" id="password" v-model="password" />
          </div>
          <button class="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90" type="submit">Log In</button>
        </form>
      </div>
    </div>
  </template>

