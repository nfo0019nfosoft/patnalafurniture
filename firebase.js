import { initializeApp }
from "firebase/app";

import { getAuth }
from "firebase/auth";

const firebaseConfig = {

apiKey:
"AIzaSyDkgIWjEtbevCZWUK1rpfqRwY0yUwiATx0",

authDomain:
"myotpapp-2a25b.firebaseapp.com",

projectId:
"myotpapp-2a25b",

storageBucket:
"myotpapp-2a25b.firebasestorage.app",

messagingSenderId:
"106561591395",

appId:
"1:106561591395:web:6338599d2c5061a326c056"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);