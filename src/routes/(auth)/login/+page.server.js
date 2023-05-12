/** @type {import('./$types').PageServerLoad} */
import {redirect, fail} from "@sveltejs/kit";

export async function load(event) {
    const url = event.url;

    const redirectUrl = url.searchParams.get('redirect') || null;
    if (event.locals.pb.authStore.isValid) {
        throw redirect(302, redirectUrl ? redirectUrl : '/_/dashboard');
    }

    return {
        user: {...event.locals.user},
        // theses: JSON.parse(JSON.stringify(records))
    };
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, locals }) => {
        // TODO log the user in
        const data = await request.formData();
        const email = data.get('email') || "";
        const password = data.get('password') || "";
        const redirectLogin = url.searchParams.get('redirect') || '';
        let user = null;



        try {
            const { token, record } = await locals.pb.collection('users').authWithPassword(email, password, {}, {
                expand: "role"
            });
            const json = JSON.stringify({ token, record });
            const value = Buffer.from(json).toString('base64');

            cookies.set('pb_auth', value);

            
            
            // if (token && record) {
            //     // throw redirect(302, '/dashboard');
            //     return {success: true};
            // } 
        } catch (error) {
            console.log("I am here buddy", error)
            locals.pb.authStore.clear();
            return fail(400, { email, incorrect: true });
        }

        // if (user && user?.expand.role.slug === 'admin') {
        //     console.log("yeah", user)
        //     throw redirect(302, '/admin');
        // }

        throw redirect(302, redirectLogin?.length > 0 ? redirectLogin : '/_/dashboard');
    }
};