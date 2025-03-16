'use client';

import { FormEvent } from 'react';
import UploadFormInput from './upload-form-input';
import { z } from 'zod';

// Schema with Zod
const schema = z.object({
    file: z
    .instanceof(File, {message: 'Invalid file'})
    .refine((file) => file.size <= 25*1024*1024,
    'File size must be less than 25MB',
    )
    .refine(
        (file) => file.type.startsWith('application/pdf'),
        'File must be a PDF'
    ),
});

interface UploadFormProps {
  onSubmit: (file: File) => void;
}

export default function UploadForm({ onSubmit }: UploadFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get('file') as File;
    if (file) {
      onSubmit(file);
    }

//   Validate the fields using Zod.
const validatedFields = schema.safeParse({file});
console.log(validatedFields);
if(!validatedFields.success){
    console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
    return;
}

//   Upload the file to UploadThing.  

//   Parse the PDF using LangChain.  
//   Summarize the PDF using AI.  
//   Save the summary to the database.  
//   Redirect to the summary page.

};

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <UploadFormInput onChange={(file) => onSubmit(file)} />
    </form>
  );
}