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
import { add, pencil, close, checkmark } from "ionicons/icons";
import { useEffect, useState } from "react";
import { saveSupplier, searchSuppliersById } from "./SupplierApi";

const SupplierEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const routeMatch: any = useRouteMatch("/folder/supplier/:id");
  const id = routeMatch?.params?.id;

  const [supplier, setSupplier] = useState<Supplier>({});

  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  // ~ Funciona asi pero en el tutorial esta como el segundo
  // const search = async () => {
  //   if (id !== "new") {
  //     let result = await searchSuppliersById(id);
  //     setSupplier(result);
  //   }
  // };

  const search = async () => {
    if (id === "new") {
      setSupplier({});
    } else {
      let result = await searchSuppliersById(id);
      setSupplier(result);
    }
  };

  const save = async () => {
    await saveSupplier(supplier);
    history.push("/folder/suppliers");
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
            {id == "new" ? "Agregar Proveedor" : "Editar Proveedor"}
          </IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Nombre"
                  labelPlacement="stacked"
                  placeholder={supplier.name}
                  value={supplier.name}
                  onIonChange={(e) => (supplier.name = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Email"
                  labelPlacement="stacked"
                  placeholder={supplier.email}
                  value={supplier.email}
                  onIonChange={(e) => (supplier.email = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Address"
                  labelPlacement="stacked"
                  placeholder={supplier.address}
                  value={supplier.address}
                  onIonChange={(e) =>
                    (supplier.address = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Teléfono"
                  labelPlacement="stacked"
                  placeholder={supplier.phone}
                  value={supplier.phone}
                  onIonChange={(e) => (supplier.phone = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  label="Web"
                  labelPlacement="stacked"
                  placeholder={supplier.web}
                  onIonChange={(e) => (supplier.web = String(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonInput
                  label="Contacto"
                  labelPlacement="stacked"
                  placeholder={supplier.contact}
                  onIonChange={(e) =>
                    (supplier.contact = String(e.detail.value))
                  }
                ></IonInput>
              </IonItem>
            </IonCol>
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

export default SupplierEdit;
