import no_image from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url : string) =>{
    if(!url) return no_image;
    
    const target = 'media/';
    const ind = url.indexOf(target) + target.length;
    
    return url.slice(0, ind) + 'crop/600/400/' + url.slice(ind);
}

export default getCroppedImageUrl