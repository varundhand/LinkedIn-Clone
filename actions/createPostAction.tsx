'use server'

import { currentUser } from "@clerk/nextjs/server"

type FormData = {
    text: string;
    image: string | null;
}

export default async function createPostAction(formData: FormData) {
    const user = await currentUser()

    const postInput  = formData.text
    const image = formData.image

    let imageUrl : string | undefined

    if (!user) {
        throw new Error('You need to be signed in to create a post')
    }

    // define user

    // upload image(if one exists)

    // create post in db

    // revalidatePath '/' - home page to show the new post

}