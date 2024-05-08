"use client"

import { ImageIcon, XIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser } from '@clerk/nextjs';
import { Button } from './ui/button';
import { useRef, useState } from 'react';
import createPostAction from '@/actions/createPostAction';

const PostForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const { user } = useUser();
    const [preview, setPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState<{ text: string, image: string | null }>({ text: '', image: null });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setFormData(prevState => ({ ...prevState, image: URL.createObjectURL(file) }));
        }
    };

    const clearPreview = () => {
        setPreview(null);
        if (imageInputRef.current) {
            imageInputRef.current.value = ''; // Clear file input value
        }
        setFormData(prevState => ({ ...prevState, image: null }));
    };

    const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value} = e.target;
        setFormData(prevState => ({ ...prevState, text: value }));
        console.log(formData)
    }

    const handleFormSubmit = async (e:any) => {  
        e.preventDefault()
        setFormData({text: '', image: null});
        setPreview(null)

        //TODO: check whether the form isnt empty before submitting(edge case)
        try {
            await createPostAction(formData)
        } catch (error) {
            console.log('Error creating the post: ', error)
        }

     }

    return (
        <div className='mb-2 sm:p-0 p-2 '>
            <form ref={formRef} action="" method='post' onSubmit={handleFormSubmit} className='space-y-2 bg-white rounded-lg border p-2'>
                <div className='flex items-center space-x-2'>
                    <Avatar>
                        <AvatarImage src={user?.imageUrl} />
                        <AvatarFallback>
                            {user?.firstName?.charAt(0)} {user?.lastName?.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <input
                        type='text'
                        name='postInput'
                        placeholder='Start writing a post...'
                        onChange={handleFormInputChange}
                        className='flex-1 outline-none rounded-full py-3 px-4 border'
                    />

                    <input
                        ref={imageInputRef}
                        type='file'
                        name='image'
                        accept='image/*'
                        hidden
                        onChange={handleImageChange}
                    />
                </div>

                {preview && (
                    // <div className='flex justify-center'>
                        <div className='mt-2'>
                            <img src={preview} alt='Preview' className='w-full h-full object-cover rounded-lg' />
                        </div>
                    // </div>
                )}

                <div className='flex justify-end mt-2 space-x-2'>
                    <Button type='button' onClick={() => imageInputRef.current?.click()}>
                        <ImageIcon className='mr-2' size={16} />
                        {preview ? 'Change' : 'Add'} Image
                    </Button>

                    {preview && (
                        <Button type='button' onClick={clearPreview} variant='destructive'>
                            <XIcon className='mr-2' size={16} />
                            Remove Image
                        </Button>
                    )}
                </div>
            </form>

            <hr className='mt-2 border-gray-300 '/>
        </div>
    );
};

export default PostForm;
