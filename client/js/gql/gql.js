export async function dbQuery(queryIn){
  var res = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: queryIn
    })
  });
  var jsonobj = await result.json();
  return jsonobj;
}

export async function dbAuthQuery(queryIn){
  var res = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Authorization': cookies_here,
    },
    body: JSON.stringify({
      query: queryIn
    })
  });
  var jsonobj = await result.json();
  return jsonobj;
}


