import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {




  seeMore: boolean = false;
  post: any = [
    {
      p_image: "assets/images/12f.jpg",
      username: "harris__00",
      post_image: [
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", type: 'video' },
        { media: "assets/post/start2.jpeg", type: 'image' },
      ],
      likes: 12342,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜, Hello its me Harris and this is my new most.I hope you enjoy 💖😜 Hello its me Harris and this is my new most.I hope you enjoy 💖😜 Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "343",
      time: "22/2/2022"
    },
    {
      p_image: "assets/images/12f.jpg",
      username: "harris__00",
      post_image: [
        { media: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: 'video' },
        { media: "assets/post/iphone2.jpeg", type: 'image' },
      ],
      likes: 12342,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "343",
      time: "22/2/2022"
    },
    {
      p_image: "assets/images/11f.jpg",
      username: "aesthetic",
      post_image: [
        { media: "assets/post/car1.jpeg", type: 'image' },
        { media: "assets/post/iphone1.jpeg", type: 'image' },
        { media: "assets/post/car2.jpeg", type: 'image' },
        { media: "assets/post/start2.jpeg", type: 'image' },
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "assets/post/start1.jpeg", type: 'image' },
      ],
      likes: 6452,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "32",
      time: "23/7/2023"
    },
    {
      p_image: "assets/images/10f.jpg",
      username: "infor_bar",
      post_image: [
        { media: "assets/post/car2.jpeg", type: 'image' },
        { media: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", type: 'video' },
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "assets/post/iphone1.jpeg", type: 'image' },
        { media: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", type: 'video' },
        { media: "assets/post/start1.jpeg", type: 'image' },
      ],
      likes: 4435,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "645",
      time: "04/7/2021"
    },
    {
      p_image: "assets/images/9f.jpg",
      username: "mob_store",
      post_image: [
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "assets/post/car2.jpeg", type: 'image' },
        { media: "assets/post/start2.jpeg", type: 'image' },
        { media: "assets/post/car1.jpeg", type: 'image' },
        { media: "assets/post/iphone1.jpeg", type: 'image' },
        { media: "assets/post/start1.jpeg", type: 'image' },
      ],
      likes: 7054,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "2343",
      time: "15/12/2022"
    },
    {
      p_image: "assets/images/8f.jpg",
      username: "dynamic",
      post_image: [
        { media: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", type: 'video' },
      ],
      likes: 6545,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "14343",
      time: "25/10/2023"
    },
    {
      p_image: "assets/images/7f.jpg",
      username: "app_store",
      post_image: [
        { media: "assets/post/car1.jpeg", type: 'image' },
        { media: "assets/post/start2.jpeg", type: 'image' },
        { media: "assets/post/car2.jpeg", type: 'image' },
        { media: "assets/post/iphone1.jpeg", type: 'image' },
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "assets/post/start1.jpeg", type: 'image' },
      ],
      likes: "7054",
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: 1345455,
      time: "26/10/2023"
    },
    {
      p_image: "assets/images/5f.jpg",
      username: "fanty_44",
      post_image: [
        { media: "assets/post/start2.jpeg", type: 'image' },
        { media: "assets/post/start3.jpeg", type: 'image' },
        { media: "assets/post/car1.jpeg", type: 'image' },
        { media: "assets/post/car2.jpeg", type: 'image' },
        { media: "assets/post/iphone1.jpeg", type: 'image' },
        { media: "assets/post/start1.jpeg", type: 'image' },
      ],
      likes: 4534,
      des: "Hello its me Harris and this is my new most.I hope you enjoy 💖😜",
      Comment: "243",
      time: "22/2/2018"
    },
  ]
}
