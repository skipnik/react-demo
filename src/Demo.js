import React from "react";
import { useState, useEffect } from "react";

export default function Demo() {
    const pushNotificationSupported = isPushNotificationSupported();
    const [userConsent, setSuserConsent] = useState(Notification.permission);

    function isPushNotificationSupported() {
        return "serviceWorker" in navigator && "PushManager" in window;
    }

    async function askUserPermission() {
        return await Notification.requestPermission();
    }

    const onClickAskUserPermission = () => {
        askUserPermission().then(consent => {
          setSuserConsent(consent);
        });
    };

    function sendNotification() {
        console.log('send notification');
        const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
        const text = "Take a look at this brand new t-shirt!";
        const title = "New Product Available";
        const options = {
            body: text,
            icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
            vibrate: [200, 100, 200],
            tag: "new-product",
            image: img,
            badge: "https://spyna.it/icons/android-icon-192x192.png",
            actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
        };
        navigator.serviceWorker.ready.then(function(serviceWorker) {
            console.log('show');
            serviceWorker.showNotification(title, options);
        });
    }

    return (
        <div className="demo-container">
            <div className="demo-paragraph">Push notification are {!pushNotificationSupported && "NOT"} supported by your device.</div>

            <div className="demo-paragraph">User consent to recevie push notificaitons is <strong>{userConsent}</strong>.</div>

            <div className="demo-paragraph">
                <button disabled={!pushNotificationSupported || (userConsent === 'granted')} onClick={onClickAskUserPermission}>
                    {(userConsent === 'granted') ? "Consent granted" : " Ask user permission"}
                </button>
            </div>

            <div className="demo-paragraph">
                <button onClick={sendNotification}>Send a notification</button>
            </div>
        </div>
    );
}