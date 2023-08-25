    <script setup>
         
    </script>

<template>
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
  <div class="max-w-sm w-full p-4 bg-white shadow-md rounded-md">
    <h2 class="text-xl font-semibold mb-3 text-center text-gray-800">Contact Us</h2>
    <form @submit.prevent="">
      <div class="mb-2">
        <label class="block text-sm font-medium text-gray-700" for="name">Name</label>
        <input class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="name" />
      </div>
      <div class="mb-2">
        <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
        <input class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" />
      </div>
      <div class="mb-2">
        <label class="block text-sm font-medium text-gray-700" for="subject">Subject</label>
        <input class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="subject" />
      </div>
      <div class="mb-2">
        <label class="block text-sm font-medium text-gray-700" for="message">Message</label>
        <textarea class="w-full px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400" rows="3" id="message"></textarea>
      </div>
      <button class="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90" type="submit">Send</button>
    </form>
  </div>
</div>

</template>
