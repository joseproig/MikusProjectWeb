const BASE_URL = 'https://quantum-tech.duckdns.org/api/v1'


export async function obtainAPIToken({queryKey}) {
    const [id] = queryKey;
   
    let response = await fetch(BASE_URL + '/auth/login-base',{
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({"baseId":id}),
        method: "POST"
    });

   

    let data = null;
    if (response.status === 200) {
        data = await response.json();
    }
    console.log("winnieh");
    return data.data;
}

export async function obtainUserInfo(token, id) {
    let response = await fetch(BASE_URL + '/supervised-users/' + id,{
        headers: { "Content-Type": "application/json", 
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(id),
        method: "GET"
    });
    let data = null;
    if (response.status === 200) {
        data = await response.json();
    }
    return data;
}

export async function obtainCurrentId(token, id) {
    let response = await fetch(BASE_URL + '/supervised-users/' + id + "/current-state",{
        headers: { 
            "Content-Type" : "application/json", 
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(id),
        method: "GET"
    });
    let data = null;
    if (response.status === 200) {
        data = await response.json();
    }
    return data;
}

export function buyItem (supervisedId, itemName, token) {
    fetch(BASE_URL + '/supervised-users/' + supervisedId + '/inventory', {
        method: 'POST', // or GET
        headers: { 
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "itemName":itemName
        })
      }).then(res => res.json()) // if response is json, for text use res.text()
      .then(response => console.log('Response:', JSON.stringify(response))) // if text, no need for JSON.stringify
      .catch(error => console.error('Error:', error));
}