'use server'

import { currentUser } from "@clerk/nextjs/server"

type FormData = {
    text: string;
    image: string | null;
}

export default async function createPostAction(formData: FormData) {
    const user = await currentUser()

    if (!user) {
        throw new Error('You need to be signed in to create a post')
    }

}