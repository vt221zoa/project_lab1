export const buildCloudinaryUrl = (publicId: string, folder = '', width = 270, height = 390): string => {
    const base = 'https://res.cloudinary.com/dbhwwtyd1/image/upload';
    const transformations = `c_fill,w_${width},h_${height},q_auto,f_auto`;
    return `${base}/${transformations}/${folder ? folder + '/' : ''}${publicId}`;
};