use("ecommerce");

// db.users.insertMany([
//   {
//     _id: ObjectId("650000000000000000000004"),
//     name: "Neha Singh",
//     email: "neha@example.com",
//     age: 22,
//     gender: "female",
//     isActive: true,
//     roles: ["customer"],
//     address: {
//       city: "Noida",
//       state: "Uttar Pradesh",
//       country: "India",
//       pincode: "201301"
//     },
//     skills: ["Java", "Spring Boot", "MySQL"],
//     preferences: {
//       newsletter: true,
//       notifications: true,
//       language: "en"
//     },
//     createdAt: ISODate("2025-03-18T11:45:00Z"),
//     lastLogin: ISODate("2026-09-09T07:30:00Z")
//   },

//   {
//     _id: ObjectId("650000000000000000000005"),
//     name: "Vikash Gupta",
//     email: "vikash@example.com",
//     age: 41,
//     gender: "male",
//     isActive: true,
//     roles: ["customer", "seller", "admin"],
//     address: {
//       city: "Mumbai",
//       state: "Maharashtra",
//       country: "India",
//       pincode: "400001"
//     },
//     skills: ["Node.js", "Express", "MongoDB", "AWS"],
//     preferences: {
//       newsletter: false,
//       notifications: true,
//       language: "en"
//     },
//     createdAt: ISODate("2022-08-12T08:20:00Z"),
//     lastLogin: ISODate("2026-09-12T19:10:00Z")
//   },

//   {
//     _id: ObjectId("650000000000000000000006"),
//     name: "Sneha Patel",
//     email: "sneha@example.com",
//     age: 31,
//     gender: "female",
//     isActive: false,
//     roles: ["customer", "seller"],
//     address: {
//       city: "Ahmedabad",
//       state: "Gujarat",
//       country: "India",
//       pincode: "380001"
//     },
//     skills: ["Python", "FastAPI", "MongoDB"],
//     preferences: {
//       newsletter: true,
//       notifications: false,
//       language: "hi"
//     },
//     createdAt: ISODate("2024-02-25T13:10:00Z"),
//     lastLogin: ISODate("2026-06-15T10:45:00Z")
//   }
// ])

// db.products.insertMany([
//   {
//     _id: ObjectId("660000000000000000000001"),
//     name: "MacBook Air M3",
//     category: "Laptop",
//     brand: "Apple",
//     price: 99999,
//     discount: 10,
//     stock: 25,
//     isAvailable: true,

//     specifications: {
//       processor: "Apple M3",
//       ram: 16,
//       storage: 512,
//       storageType: "SSD",
//       screenSize: 13.6
//     },

//     tags: ["laptop", "apple", "premium", "work"],

//     ratings: {
//       average: 4.7,
//       count: 128
//     },

//     suppliers: [
//       {
//         name: "Tech Distributor India",
//         country: "India",
//         price: 90000
//       },
//       {
//         name: "Global Electronics",
//         country: "Singapore",
//         price: 87000
//       }
//     ],

//     createdAt: ISODate("2026-01-10T10:00:00Z")
//   },

//   {
//     _id: ObjectId("660000000000000000000002"),
//     name: "iPhone 17",
//     category: "Mobile",
//     brand: "Apple",
//     price: 79999,
//     discount: 5,
//     stock: 50,
//     isAvailable: true,

//     specifications: {
//       processor: "A19",
//       ram: 8,
//       storage: 256,
//       storageType: "Flash",
//       screenSize: 6.3
//     },

//     tags: ["mobile", "apple", "5g", "premium"],

//     ratings: {
//       average: 4.5,
//       count: 342
//     },

//     suppliers: [
//       {
//         name: "Mobile Hub",
//         country: "India",
//         price: 72000
//       },
//       {
//         name: "Global Electronics",
//         country: "Singapore",
//         price: 69000
//       }
//     ],

//     createdAt: ISODate("2026-02-15T12:00:00Z")
//   },

//   {
//     _id: ObjectId("660000000000000000000003"),
//     name: "Sony WH-1000XM6",
//     category: "Headphones",
//     brand: "Sony",
//     price: 34999,
//     discount: 15,
//     stock: 8,
//     isAvailable: true,

//     specifications: {
//       type: "Over Ear",
//       battery: 40,
//       connectivity: ["Bluetooth", "USB-C"],
//       noiseCancellation: true
//     },

//     tags: ["audio", "sony", "wireless", "premium"],

//     ratings: {
//       average: 4.8,
//       count: 89
//     },

//     suppliers: [
//       {
//         name: "Audio World",
//         country: "India",
//         price: 28000
//       }
//     ],

//     createdAt: ISODate("2025-12-01T09:30:00Z")
//   }
// ])

// db.orders.insertMany([
//   {
//     _id: ObjectId("670000000000000000000004"),

//     userId: ObjectId("650000000000000000000004"),

//     items: [
//       {
//         productId: ObjectId("660000000000000000000005"),
//         name: "Samsung Galaxy S26",
//         quantity: 1,
//         price: 74999,
//         discount: 8
//       },
//       {
//         productId: ObjectId("660000000000000000000006"),
//         name: "Logitech MX Master 4",
//         quantity: 1,
//         price: 8999,
//         discount: 20
//       }
//     ],

//     shippingAddress: {
//       city: "Noida",
//       state: "Uttar Pradesh",
//       pincode: "201301"
//     },

//     payment: {
//       method: "UPI",
//       transactionId: "TXN456789123",
//       status: "paid"
//     },

//     status: "delivered",

//     coupon: {
//       code: "WELCOME500",
//       discount: 500
//     },

//     subtotal: 83998,
//     shippingFee: 0,
//     tax: 15119,
//     totalAmount: 98617,

//     orderDate: ISODate("2026-08-28T10:45:00Z"),

//     delivery: {
//       expectedDate: ISODate("2026-09-02T00:00:00Z"),
//       deliveredDate: ISODate("2026-09-01T14:20:00Z")
//     }
//   },

//   {
//     _id: ObjectId("670000000000000000000005"),

//     userId: ObjectId("650000000000000000000005"),

//     items: [
//       {
//         productId: ObjectId("660000000000000000000004"),
//         name: "Dell XPS 15",
//         quantity: 1,
//         price: 124999,
//         discount: 12
//       },
//       {
//         productId: ObjectId("660000000000000000000006"),
//         name: "Logitech MX Master 4",
//         quantity: 2,
//         price: 8999,
//         discount: 20
//       }
//     ],

//     shippingAddress: {
//       city: "Mumbai",
//       state: "Maharashtra",
//       pincode: "400001"
//     },

//     payment: {
//       method: "Debit Card",
//       transactionId: "TXN789456321",
//       status: "paid"
//     },

//     status: "processing",

//     coupon: {
//       code: "PROUSER",
//       discount: 2000
//     },

//     subtotal: 142997,
//     shippingFee: 300,
//     tax: 25739,
//     totalAmount: 167036,

//     orderDate: ISODate("2026-09-08T16:15:00Z"),

//     delivery: {
//       expectedDate: ISODate("2026-09-14T00:00:00Z"),
//       deliveredDate: null
//     }
//   },

//   {
//     _id: ObjectId("670000000000000000000006"),

//     userId: ObjectId("650000000000000000000006"),

//     items: [
//       {
//         productId: ObjectId("660000000000000000000005"),
//         name: "Samsung Galaxy S26",
//         quantity: 2,
//         price: 74999,
//         discount: 8
//       }
//     ],

//     shippingAddress: {
//       city: "Ahmedabad",
//       state: "Gujarat",
//       pincode: "380001"
//     },

//     payment: {
//       method: "Cash on Delivery",
//       transactionId: null,
//       status: "pending"
//     },

//     status: "pending",

//     coupon: null,

//     subtotal: 149998,
//     shippingFee: 150,
//     tax: 26999,
//     totalAmount: 177147,

//     orderDate: ISODate("2026-09-10T13:25:00Z"),

//     delivery: {
//       expectedDate: ISODate("2026-09-16T00:00:00Z"),
//       deliveredDate: null
//     }
//   }
// ])

// db.products.find()

// db.products.find({ price :  { $gt : 70000} })
// db.products.find({ stock :  { $gt : 20} })

// db.orders.find({ totalAmount : { $gt : 180000} })

// db.users.find({ age : { $gt : 20} })

// db.products.find({ price : { $gte : 79999 } })
//
// db.products.find({ $nor : [{ price : { $lt : 50000 } } , { stock : { $lt : 30 } }] })

// db.users.find();

//find users from uttarpradesh
// db.users.find({ 'address.state' : 'Uttar Pradesh' });

// Calculate total sales
// db.orders.aggregate([
//   {
//     $group: {
//       _id: null,
//       totalSales: {
//         $sum: "$totalAmount"
//       },
//     },
//   },
// ]);

/// calculate the top selling product

// db.orders.aggregate([
//   {
//     $unwind: "$items",
//   },
//   {
//     $group: {
//       _id: '$items.name',
//       totalQuantity: { $sum: "$items.quantity" },
//     },
//   },{
//     $sort: {
//       totalQuantity: -1,
//     },
//   },
//   {
//     $limit: 5,
//   },
// ]);


// Calculate the revenue by Category 
// db.orders.aggregate([
//   { 
//     $unwind : '$items'
//   },
//   {
//     $lookup: {
//       from: 'products',
//       localField: 'items.productId',
//       foreignField: '_id',
//       as: 'product'
//     }
//   } ,
//   { 
//     $unwind : '$product',
//   } ,
//   {
//     $group: {
//       _id:  '$product.category',
//       totalRevenue : {
//         $sum : { $multiply : [ '$items.quantity' , '$items.price' ] }
//        }
//     }
//   },

// ]) ;

// Give the user who spend more than 10000

db.orders.aggregate([ 
  { 
    $group : {
      _id : '$userId',
      totalAmount : { $sum : '$totalAmount' }
    }
  } ,
  {
    $match: {
       totalAmount : {
        $gt : 100000
       }
    }
  }

])

// calculate the average of the Orders

db.orders.aggregate([ 
  {
    $group : {
      _id : null,
      averageOrderValue : { 
        $avg :  '$totalAmount'
      }
    }
  }
 ])


 //Find the Most Common Payment Method

db.orders.aggregate([
  {
    $group : {
      _id : '$payment.method',
      paymentMethod : { $sum : 1 },
    }
  },
  {
    $sort : {
      totalQuantity : -1
    }
  },
  {
    $limit : 1 ,
  }
])


//

