self.addEventListener("notificationclick", function (event) {
  console.log("notification open");
  const data = event.notification.data.FCM_MSG.data;
  console.log('Data',data);

  event.waitUntil(
    clients.matchAll({
        type: "window",
      }).then(function (clientList) {

        if (clients.openWindow) {
            if(data.url){
                if (data.module === "Store") {
                       return clients.openWindow(`${data.url}/stores?storeUuid=${data.moduleUuid}`);
                }else if(data.module === "ADS"){
                        if(data.entityType === "VENDOR"){
                             return clients.openWindow(`${data.url}/ads/vendorAdList/adsDetails?id=${data.moduleUuid}`);
                         }else if(data.entityType === "AGENCY"){
                             if(data.entityUuid && data.subEntityUuid){
                                return clients.openWindow(`${data.url}/ads/clientAdList/adsDetails?tabIndex=1&id=${data.moduleUuid}`);
                             }else if(data.entityUuid){
                                    return clients.openWindow(`${data.url}/ads/adsDetails?tabIndex=0&id=${data.moduleUuid}`);
                             }else{
                                return clients.openWindow(`${data.url}/dashBoard/notification`);
                                 }
                         }

                }else if (data.module === "Ticket") {
                         return clients.openWindow(`${data.url}/ticketManagement?ticketUuid=${data.moduleUuid}`);

                }else if (data.module === "Package") {
                    if(data.entityType === "VENDOR"){
                        return clients.openWindow(`${data.url}/purchaseAdd`);
                    }else{
                        return clients.openWindow(`${data.url}/purchaseAdd?tabIndex=0`);
                    }
                }
                else{
                  return clients.openWindow(`${data.url}/dashBoard/notification`);
               }
            }

        }
      })
  );
});

importScripts("https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js");


var  firebaseConfig = {
        apiKey: "AIzaSyCtVNdV_9z3OgdesH6ZpDgCcmL7S1AaCZU",
        authDomain: "dasher-9a393.firebaseapp.com",
        projectId: "dasher-9a393",
        storageBucket: "dasher-9a393.appspot.com",
        messagingSenderId: "125348210814",
        appId: "1:125348210814:web:6f44979957616cd9a5102f",
        measurementId: "G-CMLQ2PDQV4"
       };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


