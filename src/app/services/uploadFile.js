import { v4 as uuid } from 'uuid';
import { extname } from 'node:path';
import { supabase } from '../../config/supabase';

export async function uploadFile(file, folder) {
    const filename = `${uuid()}${extname(file.originalname)}`;
    const path = `${folder}/${filename}`;

    const { error } = await supabase.storage
        .from('devburger-images')
        .upload(path, file.buffer, {
            contentType: file.mimetype,
            upsert: false,
            cacheControl: '3600',
        });

    if (error) {
        throw error;
    }

    return path;
}