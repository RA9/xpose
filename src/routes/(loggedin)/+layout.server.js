import {redirect} from "@sveltejs/kit";

export function load(event) {
    // if (!event.locals.pb.authStore.isValid) {
    //     throw redirect(302, '/login');
    // }
    return {
        user: JSON.parse(JSON.stringify(event.locals.user))
    };
}