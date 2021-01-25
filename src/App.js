import React from 'react';
import './App.css';
import Demo from "./Demo";
// import PushNotificationDemo from "./PushNotificationDemo";

function App() {

    return (
        <div className="app">
            <div>
                <p>
                    Hello
                </p>
            </div>
            <div>
                <Demo />
                {/* <PushNotificationDemo /> */}
            </div>
        </div>
    );
}

export default App;
