<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data)
</script>

<h1>This page talks to backend</h1>
<p>Backend says {data.message.content}</p>
