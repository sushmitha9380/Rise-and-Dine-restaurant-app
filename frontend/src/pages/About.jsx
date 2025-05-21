import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';


function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>Rise & Dine, where every meal is made with love, fresh ingredients, and a passion for great flavors. We believe that food is more than just fuel—it’s an experience that brings people together, sparks conversations, and creates lasting memories.</p>
                <p>Start your day with a classic Full English Breakfast or a light and refreshing Avocado Toast. For lunch, enjoy the rich flavors of an authentic Spaghetti Carbonara or a fresh, crisp Caesar Salad. As the evening sets in, treat yourself to a warm and comforting Spicy Beef dish or a flavorful Chickpea Curry. And, of course, no meal is complete without something sweet—our Lemon Cake, Cinnamon Rolls, and Vegan Pancakes are perfect for satisfying your cravings.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>we are committed to serving dishes that are both delicious and satisfying. Whether you’re craving a hearty breakfast, a wholesome lunch, a comforting dinner, or a sweet treat, we have something for everyone. Our menu is thoughtfully curated to balance indulgence and nourishment, ensuring that every bite is as delightful as the last. Join us at Rise & Dine and discover food that’s made with care, served with warmth, and enjoyed with good company. Whether you’re here for breakfast, lunch, dinner, or dessert, we’re ready to make your meal a memorable one.</p><p>Come hungry, leave happy! 🍽️✨</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
               
            </div>
        </div>
    )
}

export default About;