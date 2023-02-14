import { Component } from '@angular/core';

interface Hotel
{
   hotelId:number,
   hotelName:string,
   imageName:string,
   address:string,
   about:string
}

// decorators
@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent {

  
  allHotel : Array<Hotel> = [];
  wishList : Array<Hotel> = [];
  wishlistCount:number=0 ;
  constructor()
  {
    let h1 : Hotel = {
      "hotelId":101,
      "hotelName":"Lemon Tree Hotels",
      "imageName":"lemontreehotels.jpg",
      "address":"Bangalore,Located in the heart of the Electronic City.",
      "about":"Hotel Keys Select Hosur Road offers top-notch facilities such as an in-house lounge with a bar and pool, a 24-hour cafe and luxe rooms."
    }
    let h2 : Hotel = {
      
      "hotelId":102,
      "hotelName":"Emerald Park",
      "imageName":"emeraldpark.jpg",
      "address":"New Delhi,11 km from Qutub Minar and 12 km from MG Road",
      "about":" Fitted with a terrace, the units offer air conditioning and feature a flat-screen TV and a private bathroom with shower and free toiletries. There is also a fridge, microwave and a kettle."
      
    }
    let h3 : Hotel = {
      "hotelId":103,
      "hotelName":"Silent Valley",
      "imageName":"silentvalley.jpg",
      "address":"Ooty, 8.4 km from Ooty Lake and 6.3 km from Ooty Botanical Gardens,",
      "about":"The farm stay offers a flat-screen TV and a private bathroom with free toiletries, a hairdryer and shower.Guests at Silent valley can enjoy a vegetarian breakfast."
      
    }
    let h4 : Hotel = {
      "hotelId":104,
      "hotelName":"Comfort Park",
      "imageName":"comfortpark.jpg",
      "address":"Chennai, within 4.9 km of Madras Medical College and 6.8 km of Chennai Trade Centre.",
      "about":"At the hotel, rooms are fitted with a desk, a TV, a private bathroom, bed linen and towels. Provides some rooms with city views, and the rooms come with a kettle. The rooms at the accommodation have air conditioning and a wardrobe."
    }

    this.allHotel = [h1,h2,h3,h4];

  }


  goForBuy(hotel:string)
  {
    let hotelId = parseInt(hotel);
    console.log(" code to buy "+hotelId+" hotel");
    
  }

  addWishlist(hotel:string)
  {
    let addHotelId = parseInt(hotel);
    
    this.allHotel.forEach(h=>{
      if(h.hotelId == addHotelId)
      {
        this.wishList.push(h);
        
      }
    });
    this.wishlistCount = this.wishList.length;
    console.log(this.wishList);
    
  }


}//end of class
