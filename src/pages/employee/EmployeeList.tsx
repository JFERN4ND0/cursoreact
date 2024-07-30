import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import { add, pencil, close } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeEmployee, searchEmployees } from "./EmployeeApi";

const EmployeeList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setClientes(result);
  };

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  };

  const addEmployee = () => {
    history.push("/folder/employee/new");
  };

  const editEmployee = (id: string) => {
    history.push("/folder/employee/" + id);
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
          <IonTitle size="large">Gestión de Empleados</IonTitle>
          <IonItem>
            <IonButton
              onClick={addEmployee}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar Empleado
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {clientes.map((cliente: Employee) => (
              <IonRow>
                <IonCol>
                  {cliente.firstname}
                  {cliente.lastname}
                </IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.address}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editEmployee(String(cliente.id))}
                    color="primary"
                    fill="clear"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    color="danger"
                    fill="clear"
                    onClick={() => remove(String(cliente.id))}
                  >
                    <IonIcon icon={close} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;
