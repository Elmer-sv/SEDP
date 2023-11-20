/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Link} from 'react-router-dom'

const products = [
  {
    id: 6,
    name: 'Anuel AA',
    to: '/ticketPurchase',
    imageSrc:'https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$235',
    color: 'VIP',
  },
    {
        id: 2,
        name: 'Chilli Peppers',
        to: '/ticketPurchase',
        imageSrc: 'https://ca-times.brightspotcdn.com/dims4/default/2d36d4a/2147483647/strip/false/crop/4935x3290+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F33%2Ff367fb35474d864941e977e5f48e%2F927846-ca-0321-red-hot-chili-peppers-sunday-calendar-cover-mrt-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
        id: 3,
        name: 'Cristian Nodal',
        to: '/ticketPurchase',
        imageSrc: 'https://cdn-az.allevents.in/events5/banners/2ad4fb6beeaff2f4082a18a4aaaab722ecdabc4aaf08140a6e3accf3b8286dbb-rimg-w960-h502-gmir.jpg?v=1683345841',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
        id: 4,
        name: 'Cristian Nodal',
        to: '/ticketPurchase',
        imageSrc:"https://static.wixstatic.com/media/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg/v1/fit/w_2500,h_1330,al_c/d638a1_b8be99e8bd93457ba45c3e3d759809cc~mv2.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
        id: 5,
        name: 'Cristian Nodal',
        to: '/ticketPurchase',
        imageSrc: 'https://cdn-az.allevents.in/events5/banners/2ad4fb6beeaff2f4082a18a4aaaab722ecdabc4aaf08140a6e3accf3b8286dbb-rimg-w960-h502-gmir.jpg?v=1683345841',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
        id: 6,
        name: 'Anuel AA',
        to: '/ticketPurchase',
        imageSrc:'https://mewmagazine.es/wp-content/uploads/2021/07/Eladio-Carrion_000.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
        id: 7,
        name: 'Cristian Nodal',
        to: '/ticketPurchase',
        imageSrc: 'https://cdn-az.allevents.in/events5/banners/2ad4fb6beeaff2f4082a18a4aaaab722ecdabc4aaf08140a6e3accf3b8286dbb-rimg-w960-h502-gmir.jpg?v=1683345841',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$235',
        color: 'VIP',
      },
      {
          id: 8,
          name: 'Red Hot Chilli Peppers',
          to: '/ticketPurchase',
          imageSrc: 'https://ca-times.brightspotcdn.com/dims4/default/2d36d4a/2147483647/strip/false/crop/4935x3290+0+0/resize/1486x991!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F33%2Ff367fb35474d864941e977e5f48e%2F927846-ca-0321-red-hot-chili-peppers-sunday-calendar-cover-mrt-02.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$235',
          color: 'VIP',
        },
    // More products...
  ]
 
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-24 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={product.to}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  