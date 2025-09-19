import { Product, Review, RelatedProduct } from '@/types/product';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day listening. Perfect for music lovers, professionals, and anyone who demands the best in audio quality.',
    shortDescription: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 15,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Premium comfort design',
      'Hi-Res Audio certified',
      'Voice assistant compatible'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
      'Range': '30 feet'
    },
    colors: ['Black', 'White', 'Silver', 'Blue'],
    tags: ['wireless', 'noise-cancelling', 'premium', 'bluetooth'],
    isNew: false,
    isFeatured: true,
    discount: 25
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Track your fitness journey with our advanced smart watch. Monitor heart rate, sleep patterns, and workout intensity. Water-resistant design perfect for swimming and outdoor activities. Stay connected with notifications and GPS tracking.',
    shortDescription: 'Advanced smart watch with fitness tracking, heart rate monitoring, and GPS.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    stockCount: 8,
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      'GPS + GLONASS',
      'Water resistant (50m)',
      '7-day battery life',
      '50+ workout modes'
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '50 meters',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Compatibility': 'iOS & Android',
      'Weight': '45g'
    },
    colors: ['Black', 'Rose Gold', 'Silver'],
    sizes: ['Small', 'Medium', 'Large'],
    tags: ['fitness', 'smartwatch', 'health', 'gps'],
    isNew: true,
    isFeatured: true,
    discount: 20
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 899.99,
    originalPrice: 1199.99,
    description: 'Capture stunning photos with our professional-grade camera lens. Ultra-sharp optics, fast autofocus, and weather-sealed construction make this lens perfect for professional photographers and serious enthusiasts.',
    shortDescription: 'Professional camera lens with ultra-sharp optics and weather-sealed construction.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'PhotoPro',
    rating: 4.9,
    reviewCount: 456,
    inStock: true,
    stockCount: 3,
    features: [
      'Ultra-sharp optics',
      'Fast autofocus',
      'Weather sealed',
      'Image stabilization',
      'Professional build quality',
      'Compatible with major camera brands'
    ],
    specifications: {
      'Focal Length': '24-70mm',
      'Aperture': 'f/2.8',
      'Image Stabilization': 'Yes',
      'Weather Sealing': 'Yes',
      'Weight': '805g',
      'Filter Size': '82mm'
    },
    tags: ['camera', 'lens', 'professional', 'photography'],
    isNew: false,
    isFeatured: false,
    discount: 25
  },
  {
    id: '4',
    name: 'Wireless Earbuds Pro',
    price: 149.99,
    originalPrice: 199.99,
    description: 'Premium wireless earbuds with active noise cancellation and superior sound quality. Perfect for workouts, commuting, and everyday use with comfortable fit and long battery life.',
    shortDescription: 'Premium wireless earbuds with active noise cancellation and superior sound quality.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'SoundMax',
    rating: 4.7,
    reviewCount: 634,
    inStock: true,
    stockCount: 12,
    features: [
      'Active noise cancellation',
      '20-hour battery life',
      'Wireless charging case',
      'IPX7 water resistance',
      'Voice assistant support',
      'Premium sound quality'
    ],
    specifications: {
      'Battery Life': '20 hours',
      'Water Resistance': 'IPX7',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '5.4g per earbud',
      'Charging': 'Wireless + USB-C',
      'Range': '30 feet'
    },
    colors: ['Black', 'White', 'Blue'],
    tags: ['wireless', 'earbuds', 'noise-cancelling', 'bluetooth'],
    isNew: true,
    isFeatured: false,
    discount: 25
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures, parties, and home use with powerful bass and clear highs.',
    shortDescription: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'SoundWave',
    rating: 4.5,
    reviewCount: 423,
    inStock: true,
    stockCount: 20,
    features: [
      '360-degree sound',
      'Waterproof design',
      '12-hour battery life',
      'Voice assistant support',
      'Party mode pairing',
      'Rugged construction'
    ],
    specifications: {
      'Battery Life': '12 hours',
      'Water Resistance': 'IPX7',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '600g',
      'Range': '100 feet',
      'Charging': 'USB-C'
    },
    colors: ['Black', 'Red', 'Blue', 'Green'],
    tags: ['speaker', 'bluetooth', 'portable', 'waterproof'],
    isNew: false,
    isFeatured: false,
    discount: 25
  },
  {
    id: '6',
    name: 'Gaming Headset',
    price: 179.99,
    originalPrice: 229.99,
    description: 'Professional gaming headset with 7.1 surround sound and noise-cancelling microphone. Designed for competitive gaming with comfort and precision.',
    shortDescription: 'Professional gaming headset with 7.1 surround sound and noise-cancelling microphone.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'GameTech',
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    stockCount: 7,
    features: [
      '7.1 surround sound',
      'Noise-cancelling microphone',
      'RGB lighting',
      'Memory foam ear cushions',
      'Cross-platform compatibility',
      'Adjustable headband'
    ],
    specifications: {
      'Driver Size': '50mm',
      'Frequency Response': '20Hz - 20kHz',
      'Connectivity': 'USB + 3.5mm',
      'Weight': '350g',
      'Cable Length': '2m',
      'Compatibility': 'PC, PS4, Xbox, Switch'
    },
    colors: ['Black', 'White', 'Red'],
    tags: ['gaming', 'headset', 'surround-sound', 'microphone'],
    isNew: false,
    isFeatured: false,
    discount: 22
  },
  {
    id: '7',
    name: 'Smart Home Hub',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Central control hub for your smart home devices. Compatible with hundreds of devices and voice assistants for seamless home automation.',
    shortDescription: 'Central control hub for your smart home devices with voice assistant support.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'SmartHome',
    rating: 4.4,
    reviewCount: 312,
    inStock: true,
    stockCount: 5,
    features: [
      'Voice assistant support',
      'WiFi and Zigbee connectivity',
      'Mobile app control',
      'Scene automation',
      'Energy monitoring',
      'Easy setup'
    ],
    specifications: {
      'Connectivity': 'WiFi 6, Zigbee 3.0',
      'Voice Assistant': 'Alexa, Google Assistant',
      'Compatibility': '500+ devices',
      'Power': 'USB-C adapter',
      'Range': '100 feet',
      'App': 'iOS & Android'
    },
    colors: ['White', 'Black'],
    tags: ['smart-home', 'hub', 'automation', 'voice-control'],
    isNew: true,
    isFeatured: false,
    discount: 19
  },
  {
    id: '8',
    name: 'Mechanical Keyboard',
    price: 159.99,
    originalPrice: 199.99,
    description: 'Premium mechanical keyboard with RGB backlighting and tactile switches. Perfect for gaming and typing with customizable keys and durable construction.',
    shortDescription: 'Premium mechanical keyboard with RGB backlighting and tactile switches.',
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
    category: 'Electronics',
    brand: 'KeyMaster',
    rating: 4.8,
    reviewCount: 789,
    inStock: true,
    stockCount: 10,
    features: [
      'RGB backlighting',
      'Tactile switches',
      'N-key rollover',
      'Aluminum frame',
      'Customizable macros',
      'USB-C connectivity'
    ],
    specifications: {
      'Switch Type': 'Tactile',
      'Key Layout': 'Full-size',
      'Backlighting': 'RGB',
      'Connectivity': 'USB-C',
      'Weight': '1.2kg',
      'Compatibility': 'Windows, Mac, Linux'
    },
    colors: ['Black', 'White', 'Silver'],
    tags: ['keyboard', 'mechanical', 'gaming', 'rgb'],
    isNew: false,
    isFeatured: true,
    discount: 20
  }
];

export const sampleReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    userAvatar: 'SJ',
    rating: 5,
    title: 'Amazing sound quality!',
    comment: 'These headphones exceeded my expectations. The noise cancellation is incredible and the sound quality is crystal clear. Perfect for my daily commute and work calls.',
    date: '2024-01-15',
    verified: true,
    helpful: 23
  },
  {
    id: '2',
    productId: '1',
    userId: 'user2',
    userName: 'Mike Chen',
    userAvatar: 'MC',
    rating: 4,
    title: 'Great headphones with minor issues',
    comment: 'Overall very satisfied with the purchase. The sound quality is excellent and the battery life is as advertised. The only downside is that they can feel a bit heavy after long use.',
    date: '2024-01-10',
    verified: true,
    helpful: 15
  },
  {
    id: '3',
    productId: '1',
    userId: 'user3',
    userName: 'Emily Davis',
    userAvatar: 'ED',
    rating: 5,
    title: 'Perfect for music lovers',
    comment: 'I\'ve been using these for 3 months now and they\'re still going strong. The comfort is amazing and the sound quality is top-notch. Highly recommend!',
    date: '2024-01-05',
    verified: true,
    helpful: 31
  }
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: '4',
    name: 'Wireless Earbuds Pro',
    price: 149.99,
    originalPrice: 199.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviewCount: 634,
    discount: 25
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    price: 89.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviewCount: 423,
    discount: 25
  },
  {
    id: '6',
    name: 'Gaming Headset',
    price: 179.99,
    originalPrice: 229.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviewCount: 567,
    discount: 22
  }
];

export function getProductById(id: string): Product | undefined {
  return sampleProducts.find(product => product.id === id);
}

export function getRelatedProducts(category: string, currentId: string): RelatedProduct[] {
  return relatedProducts.filter(product => product.id !== currentId);
}

export function getReviewsByProductId(productId: string): Review[] {
  return sampleReviews.filter(review => review.productId === productId);
}
