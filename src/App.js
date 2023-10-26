import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function App() {
  const roomID = "utsav";
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = 29535069;
 const serverSecret = "96cac24c78dba3e13c33950680007754";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "KUMAR UTSAV");

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
   });
  };

  return (
    <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}