import "./Customer";

export async function searchCustomers() {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "customers";
  let url = "http://localhost:8080/api/customers";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export async function removeCustomer(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "customers/" + id;
  let url = "http://localhost:8080/api/customers/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function saveCustomer(customer: Customer) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "customers";
  let url = "http://localhost:8080/api/customers";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function searchCustomersById(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV SI NO PONES UNO EN .ENV.PRODUCTION
  // let url = process.env.REACT_APP_API + "customers/" + id;
  let url = "http://localhost:8080/api/customers/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
