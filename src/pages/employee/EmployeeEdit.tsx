import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { checkmark } from "ionicons/icons";
import { useEffect, useState } from "react";
import { saveEmployee, searchEmployeesById } from "./EmployeeApi";

const EmployeeEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const routeMatch: any = useRouteMatch("/folder/employee/:id");
  const id = routeMatch?.params?.id;

  const [employee, setEmployee] = useState<Employee>({});

  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  // ~ Funciona asi pero en el tutorial esta como el segundo
  // const search = async () => {
  //   if (id !== "new") {
  //     let result = await searchEmployeesById(id);
  //     setEmployee(result);
  //   }
  // };

  const search = async () => {
    if (id === "new") {
      setEmployee({});
    } else {
      let result = await searchEmployeesById(id);
      setEmployee(result);
    }
  };

  const save = async () => {
    await saveEmployee(employee);
    history.push("/folder/employees");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonTitle size="large">
            {id == "new" ? "Agregar Cliente" : "Editar Cliente"}
          </IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Nombre"
                  labelPlacement="stacked"
                  placeholder={employee.firstname}
                  value={employee.firstname}
                  onIonChange={(e) =>
                    (employee.firstname = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Apellido"
                  labelPlacement="stacked"
                  placeholder={employee.lastname}
                  value={employee.lastname}
                  onIonChange={(e) =>
                    (employee.lastname = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Email"
                  labelPlacement="stacked"
                  placeholder={employee.email}
                  value={employee.email}
                  onIonChange={(e) => (employee.email = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Address"
                  labelPlacement="stacked"
                  placeholder={employee.address}
                  value={employee.address}
                  onIonChange={(e) =>
                    (employee.address = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Teléfono"
                  labelPlacement="stacked"
                  placeholder={employee.phone}
                  value={employee.phone}
                  onIonChange={(e) => (employee.phone = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol></IonCol>
          </IonRow>

          <IonItem>
            <IonButton
              onClick={save}
              color="success"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;
