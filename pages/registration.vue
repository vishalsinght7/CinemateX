
<template>
    <div>
        <NuxtLayout name="Navbaronly">
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
    <div class="max-w-md w-full p-4 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800">Sign Up</h2>
      <form >
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Username</label>
          <input class="w-full px-2 py-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="username" v-model="username" />
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="email">Email</label>
          <input class="w-full px-2 py-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" v-model="email" />
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Password</label>
          <input class="w-full px-2 py-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" :type="showPassword ? 'text' : 'password'" id="password" v-model="password" />
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="confirmPassword">Confirm Password</label>
          <input class="w-full px-2 py-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" :type="showPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword" />
        </div>
        <button class="w-full py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded hover:opacity-90" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</NuxtLayout>
</div>

</template>
<script setup>
 definePageMeta({
    layout:"custom"
 })
</script>