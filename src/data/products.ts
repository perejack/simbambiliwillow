import { ProductDetail } from '../types/Product';
import simbaCement32R from '../assets/simba-cement-32-5r.png';
import simbaPower42N from '../assets/simba-power-42-5n.png';
import pavingBlocks from '../assets/paving-blocks-60mm.jpg';

export const products: ProductDetail[] = [
  {
    id: 'simba-cement-32-5r',
    name: 'Simba Cement 32.5R',
    price: 550,
    image: simbaCement32R,
    description: 'CEM IV/B (P) 32.5N is a Pozzolanic Cement with a wide range of applications from domestic concrete to large building projects.',
    fullDescription: 'CEM IV/B (P) 32.5N is a Pozzolanic Cement with a wide range of applications from domestic concrete to large building projects. Its good strength performance makes it suitable for both general purpose and structural concrete applications.',
    features: [
      'Mortar for brick laying and plastering',
      'Suspended slabs and staircases',
      'Domestic house construction',
      'Free Delivery'
    ],
    category: 'Standard Cement',
    applications: [
      'General purpose concrete',
      'Structural concrete applications',
      'Domestic construction projects',
      'Brick laying and plastering'
    ],
    specifications: [
      'Grade: 32.5R',
      'Type: Pozzolanic Cement',
      'Standard: CEM IV/B (P) 32.5N',
      'Suitable for general and structural use'
    ]
  },
  {
    id: 'simba-power-42-5n',
    name: 'Simba Power 42.5N',
    price: 680,
    image: simbaPower42N,
    description: 'High strength class cement for specialized construction projects requiring superior performance.',
    fullDescription: 'A product of National Cement Company, Simba Cement prides itself in its Kenyan roots and endeavours to bring out the best in cement products in the country by employing the latest cutting-edge technologies that ensures we remain ahead of the game, and set some of the highest international standards in our products for decades to come.',
    features: [
      'Prestressed and posttensioned concrete',
      'Road works and foundations',
      'High rise structures',
      'Free Delivery'
    ],
    category: 'High Performance Cement',
    applications: [
      'Prestressed concrete structures',
      'Post-tensioned concrete applications',
      'Road construction and foundations',
      'High-rise building construction'
    ],
    specifications: [
      'Grade: 42.5N',
      'Type: High Strength Cement',
      'Superior performance characteristics',
      'Latest cutting-edge technology'
    ]
  },
  {
    id: 'paving-blocks-60mm',
    name: 'Paving Blocks (60mm)',
    price: 650,
    image: pavingBlocks,
    description: 'Rectangular shaped concrete paving blocks which are economical and durable, come in a variety of colours and thickness.',
    fullDescription: 'These are rectangular shaped concrete paving blocks which are; economical and durable, come in a variety of colours and thickness. They are suitable for use in parking areas, pathways, commercial and domestic roads since they offer an attractive, practical and long lasting option for pavement material.',
    features: [
      'Economical and durable',
      'Variety of colours and thickness',
      'Attractive and practical',
      'Long lasting pavement material'
    ],
    category: 'Construction Blocks',
    applications: [
      'Parking areas',
      'Pathways and walkways',
      'Commercial roads',
      'Domestic road construction'
    ],
    specifications: [
      'Thickness: 60mm',
      'Shape: Rectangular',
      'Material: Concrete',
      'Multiple color options available'
    ]
  }
];

export const getProductById = (id: string): ProductDetail | undefined => {
  return products.find(product => product.id === id);
};