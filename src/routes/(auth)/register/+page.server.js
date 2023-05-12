/** @type {import('./$types').PageServerLoad} */
import { redirect, fail } from "@sveltejs/kit";

export async function load(event) {
    const url = event.url;

    const redirectUrl = url.searchParams.get('redirect') || null;
    if (event.locals.pb.authStore.isValid) {
        throw redirect(302, redirectUrl ? redirectUrl : '/dashboard');
    }


    return {
        user: { ...event.locals.user },
        // theses: JSON.parse(JSON.stringify(records))
    };
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, locals }) => {
        // TODO log the user in
        const data = await request.formData();
        const email = data.get('email') || "";
        const username = data.get('username') || "";
        const name = data.get('name') || "";
        const password = data.get('password') || "";
        // const org_id = data.get('org-id') || "";


        const userData = {
            "username": username,
            "email": email,
            "emailVisibility": true,
            "password": password,
            "passwordConfirm": password,
            "name": name,
            role: "pgu5jn1w3aoy6x8"
        };



        try {
            const record = await locals.pb.collection('users').create(userData);

            // (optional) send an email verification request
            // await locals.pb.collection('users').requestVerification(email);

        } catch (error) {
            // console.log("I am here buddy", error)
            return fail(400, { email, incorrect: true });
        }

        throw redirect(302, '/login');
    }
};