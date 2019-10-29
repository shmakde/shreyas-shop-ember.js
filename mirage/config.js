export default function() {
    this.namespace = '/api';
    this.get('/products', function() {
      //server.passthrough()
      return {
        data: [{
          type:'products',
          id: 'steel-shopping-cart',
          attributes: {
            title: 'Steel Shopping Cart',
            color: 'Silver',
            supplier: 'Walmart',
            pricecategory: 'High',
            price: 1500.5,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This is a steel shopping cart used for multipurpose stores, with an extended 2-year manufacturer warantee.'
          }
      }, {
          type:'products',
          id: 'wood-shopping-cart',
          attributes: {
            title: 'Wood Shopping Cart',
            color: 'Gold',
            supplier: 'Amazon',
            pricecategory: 'Medium',
            price: 150.0,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This is a steel shopping cart used for multipurpose stores, with an extended 2-year manufacturer warantee.'
          }
      }, {
          type:'products',
          id: 'plastic-shopping-cart',
          attributes: {          
            title: 'Plastic Shopping Cart',
            owner: 'Plastic Salt',
            supplier: 'HEB',
            pricecategory: 'Low',
            price: 15.9,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This is a steel shopping cart used for multipurpose stores, with an extended 2-year manufacturer warantee.'
          }
      }]
      };
    });
  }