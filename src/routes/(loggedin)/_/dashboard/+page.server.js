/** @type {import('./$types').PageServerLoad} */
import {redirect} from "@sveltejs/kit";

/**
 * @param {{ locals: { pb: { authStore: { isValid: any; }; }; user: any; }; }} event
 */
export async function load(event) {
    if (!event.locals.pb.authStore.isValid) {
        throw redirect(302, '/login?redirect=/_/dashboard');
    }

    let records = [];

    // try {
    //     records = await  event.locals.pb.collection("theses").getFullList({
    //         sort: '-created',
    //         filter: "status.slug = 'pending'",
    //         expand: "author,field, status"
    //     });
    // } catch (error) {
    //     console.log({error})
    // }
   
    // console.log({records})


    return {
        user: {...event.locals.user},
        // theses: JSON.parse(JSON.stringify(records))
    };
}
