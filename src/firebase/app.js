import Firebase from 'firebase/app'
import credentials from './credential'

export const App = Firebase.initializeApp(credentials.config);
