import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import React from 'react';
// import { addListener } from 'cluster';
import Todo from '../components/todo';

const Home = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO-app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <Todo />
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
