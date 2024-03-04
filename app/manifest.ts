import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prakalp 2024',
    short_name:"Prakalp - JSPM Rajashri Shahu College of Engineering IT Department's Project Showcasing Competition. Explore cutting-edge projects, diverse competition categories, networking opportunities, and insightful guest lectures. Join us for a celebration of innovation and creativity in Information Technology.",
    description: '',
    start_url: '/',
    display: 'standalone',
    
    icons: [
      {
        src: '/PrakalpLogo',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}