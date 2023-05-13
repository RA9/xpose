/** @type {import('./$types').PageServerLoad} */
import {redirect} from "@sveltejs/kit";

export async function load(event) {
    if (!event.locals.pb.authStore.isValid) {
        throw redirect(302, '/login?redirect=/_/settings');
    }



    return {
        user: {...event.locals.user},
        // theses: JSON.parse(JSON.stringify(records))
        queryPage: event.url.searchParams.get('page')
    };
}
