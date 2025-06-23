// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

import Link from 'next/link'
import Image from 'next/image'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, limit, where } from 'firebase/firestore'
import AnimatedCategoryGrid from '@/components/AnimatedCategoryGrid'

// ADD THESE FUNCTIONS BACK - they were deleted!
async function getCategories() {
  try {
    const categoriesRef = collection(db, 'categories')
    const snapshot = await getDocs(query(categoriesRef, limit(8)))
    return snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        name: data.name || '',
        icon: data.icon || '🎰',
        image: data.image || '',
        count: data.count || 0
      }
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

async function getFeaturedVendors() {
  try {
    const vendorsRef = collection(db, 'vendors')
    const snapshot = await getDocs(
      query(vendorsRef, where('featured', '==', true), limit(6))
    )
    return snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        name: data.name || '',
        category: data.category || '',
        zone: data.zone || 'Las Vegas',
        description: data.description || '',
        image: data.image || '',
        featured: data.featured || false,
        bookingType: data.bookingType || 'direct',
        address: data.address || ''
      }
    })
  } catch (error) {
    console.error('Error fetching vendors:', error)
    return []
  }
}

// Then your HomePage component continues...
export default async function HomePage() {
  const categories = await getCategories()
  const featuredVendors = await getFeaturedVendors()
  
  // rest of your component...
}