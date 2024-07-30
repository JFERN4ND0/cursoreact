import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
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
import { saveCustomer, searchCustomersById } from "./CustomerApi";
import "./Customer";

const CostumerEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const routeMatch: any = useRouteMatch("/folder/customer/:id");
  const id = routeMatch?.params?.id;

  const [customer, setCustomer] = useState<Customer>({});

  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  // ~ Funciona asi pero en el tutorial esta como el segundo
  // const search = async () => {
  //   if (id !== "new") {
  //     let result = await searchCustomersById(id);
  //     setCustomer(result);
  //   }
  // };

  const search = async () => {
    if (id === "new") {
      setCustomer({});
    } else {
      let result = await searchCustomersById(id);
      setCustomer(result);
    }
  };

  const save = async () => {
    await saveCustomer(customer);
    history.push("/folder/customers");
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
                  placeholder={customer.firstname}
                  value={customer.firstname}
                  onIonChange={(e) =>
                    (customer.firstname = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Apellido"
                  labelPlacement="stacked"
                  placeholder={customer.lastname}
                  value={customer.lastname}
                  onIonChange={(e) =>
                    (customer.lastname = String(e.detail.value))
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
                  placeholder={customer.email}
                  value={customer.email}
                  onIonChange={(e) => (customer.email = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Address"
                  labelPlacement="stacked"
                  placeholder={customer.address}
                  value={customer.address}
                  onIonChange={(e) =>
                    (customer.address = String(e.detail.value))
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
                  placeholder={customer.phone}
                  value={customer.phone}
                  onIonChange={(e) => (customer.phone = String(e.detail.value))}
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

export default CostumerEdit;
