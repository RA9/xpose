import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

const account = new Account(client);


/**
 * @param {any} opts
 */
export async function createAccount(opts) {
    try {
        // Register User
        await account.create(
            ID.unique(),
            opts.name,
            opts.password
        ).then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    } catch (error) {
        console.log({ error })
    }
}

