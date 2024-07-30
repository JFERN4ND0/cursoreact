import "./Employee";

// ! variable ya que no funciona .env

export async function searchEmployees() {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "employees";
  let url = "http://localhost:8080/api/employees";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export async function removeEmployee(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "employees/" + id;
  let url = "http://localhost:8080/api/employees/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function saveEmployee(employee: Employee) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV
  // let url = process.env.REACT_APP_API + "employees";
  let url = "http://localhost:8080/api/employees";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function searchEmployeesById(id: string) {
  // ! POR ALGUNA RAZON NO FNCIONA CON .ENV SI NO PONES UNO EN .ENV.PRODUCTION
  // let url = process.env.REACT_APP_API + "employees/" + id;
  let url = "http://localhost:8080/api/employees/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
