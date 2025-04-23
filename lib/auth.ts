import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

// This function checks if the user is authenticated
export const getCurrentUser = async () => {
  return new Promise<any>((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);  // Return the user object if authenticated
      } else {
        resolve(null);  // Return null if not authenticated
      }
    });
  });
};