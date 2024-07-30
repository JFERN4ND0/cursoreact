import "./Supplier";

export async function searchSuppliers() {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "suppliers";
  let url = "http://localhost:8080/api/suppliers";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export async function removeSupplier(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "suppliers/" + id;
  let url = "http://localhost:8080/api/suppliers/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function saveSupplier(supplier: Supplier) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "suppliers";
  let url = "http://localhost:8080/api/suppliers";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(supplier),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function searchSuppliersById(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV SI NO PONES UNO EN .ENV.PRODUCTION
  // let url = process.env.REACT_APP_API + "suppliers/" + id;
  let url = "http://localhost:8080/api/suppliers/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
