export default defineEventHandler(async (event) => {
    
//   // handle query params
//   const { name } = getQuery(event);

//   // handle post data
//   const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_ZbvLJ7vngtMHwnda2xlc7MoB2Vt5yYXwttRZMx1u"
  );

  return data;
});
