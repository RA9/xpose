import {initializeApp} from "firebase";
import {getAuth, signInWithEmailAndPassword} from "fireauth";
import {getFirestore, collection, addDoc} from "firestore";

interface FireBaseConfig {
    apiKey: string;

    authDomain: string;

    projectId: string;

    storageBucket: string;

    messagingSenderId: string;

    appId: string;

    measurementId: string;
}


export class FireBaseAPI {
    private readonly app: null;
    private readonly auth: null;
    private readonly db: null;

    constructor(firebaseConfig: FireBaseConfig) {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.app)
    }

    async signin({email, password}) {
        try {
            const user = await signInWithEmailAndPassword(email, password)
        } catch (e) {
            console.log(e);
        }
    }

    async register() {

    }

    async create({name, data}) {
        try {
            const docRef = await addDoc(collection(this.db, name), data);
            console.log("Document written with ID: ", docRef.id);
            return docRef;
        } catch (e) {
            console.log(e)
        }
    }
}
