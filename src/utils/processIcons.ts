import { loadImageFromPath, removeBackground } from './removeBackground';
import iconTanningBed from '@/assets/icon-tanning-bed.jpg';
import iconSprayGun from '@/assets/icon-spray-gun.jpg';

export const processIconsWithoutBackground = async () => {
  try {
    console.log('Processing icons...');
    
    // Process tanning bed icon
    const tanningBedImg = await loadImageFromPath(iconTanningBed);
    const tanningBedBlob = await removeBackground(tanningBedImg);
    const tanningBedUrl = URL.createObjectURL(tanningBedBlob);
    
    // Process spray gun icon
    const sprayGunImg = await loadImageFromPath(iconSprayGun);
    const sprayGunBlob = await removeBackground(sprayGunImg);
    const sprayGunUrl = URL.createObjectURL(sprayGunBlob);
    
    return {
      tanningBedUrl,
      sprayGunUrl
    };
  } catch (error) {
    console.error('Error processing icons:', error);
    throw error;
  }
};
