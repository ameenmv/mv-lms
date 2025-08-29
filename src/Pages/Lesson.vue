<template>
  <div class="w-[100%] h-[100vh] bg-(var:--bg)">
    <div class="max-w-2xl mx-auto rounded-2xl shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-4 text-blue-700">{{ lesson.name }}</h1>

      <p class="text-gray-700 mb-4 break-words">{{ lesson.description }}</p>

      <img
        :src="lesson.imageUrl"
        alt="Lesson Cover"
        class="rounded-xl w-full mb-4 max-h-72 object-cover"
      />

      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="youtubeEmbedUrl(lesson.videoUrl)"
          frameborder="0"
          allowfullscreen
          class="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const lesson = ref({});

function youtubeEmbedUrl(url) {
  if (!url) return "about:blank";
  const videoId = url.includes("youtu.be/")
    ? url.split("youtu.be/")[1]?.split("?")[0]
    : url.includes("v=")
    ? url.split("v=")[1]?.split("&")[0]
    : null;

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "about:blank";
}

onMounted(() => {
  lesson.value = {
    name: route.query.name,
    description: route.query.description,
    imageUrl: route.query.imageUrl,
    videoUrl: route.query.videoUrl,
  };
});
</script>
