/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch("http://127.0.0.1:8000");
  const message = await res.json();

  return { message };
}

