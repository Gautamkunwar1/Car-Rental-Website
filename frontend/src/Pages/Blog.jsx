import React from "react";
import BlogPost from "../Components/BlogPost";
import SideBlog from "../Components/SideBlog";
import Section from "../Components/Section";

function Blog() {
    const blogData = [
        {
            id:1,
            imgUrl:"src/Images/blueCar.jpg",
            heading:"How To Keep Clean The Inside Of Your Car All The Time ?",
            userPic:"src/Images/about.jpg",
            username:"Rahat",
            date:"✅27 March 2024",
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos exercitationem nobis modi iste beatae ipsam dolorum minima, ut aliquid atque illum. Aspernatur voluptate error perspiciatis accusamus ducimus vitae deserunt quidem non exercitationem! Itaque ipsa possimus doloremque fugit. Porro, blanditiis consequuntur.",
        },

        {
            id:2,
            imgUrl:"src/Images/menCar.jpg",
            heading:"How To Keep Clean The Inside Of Your Car All The Time ?",
            userPic:"src/Images/about.jpg",
            username:"Rahat",
            date:"✅27 March 2024",
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos exercitationem nobis modi iste beatae ipsam dolorum minima, ut aliquid atque illum. Aspernatur voluptate error perspiciatis accusamus ducimus vitae deserunt quidem non exercitationem! Itaque ipsa possimus doloremque fugit. Porro, blanditiis consequuntur.",
        },
    ]

    const sideBlog = [
        {
            id:1,
            heading:"Our Recent Blogs",
            imgUrl:"src/Images/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"02 April 2025"
        },
        {
            id:2,
            heading:"New trends",
            imgUrl:"src/Images/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.",
            date:"03 April 2025"
        },
        {
            id:3,
            heading:"Our Recent Blogs",
            imgUrl:"src/Images/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"03 April 2025"
        },
        {
            id:4,
            heading:"Our  Blogs",
            imgUrl:"src/Images/car.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci sunt facere, ipsa neque, itaque minus ipsam consectetur soluta, porro quam aperiam laborum.!",
            date:"03 April 2025"
        },
    ]
    return (
        <>
            <Section 
                imgUrl={"src/Images/menCar.jpg"} 
                heading={"Blog Posts"} 
                features={[]} 
                subheading={"Stay Connected with us and experience our premium blogs"} 
            />
            <div className="flex gap-10">
            <div>
            {blogData.map((item)=>{
                return <BlogPost key={item.id} imgUrl={item.imgUrl} heading={item.heading} userPic={item.userPic} username={item.username} date={item.date} desc={item.desc}/>
            })}
            </div>

            <div>
                <div>
                {sideBlog.map((data)=>{
                    return <SideBlog key={data.id} imgUrl={data.imgUrl} heading={data.heading} desc={data.desc} date={data.date}/>
                })}
                </div>
                <div className="flex justify-center mt-40 text-white shadow-2xl h-[45%]">
                    <img src="src/Images/ad.png" alt="img can't load"className="w-[80%]" />
                </div>
                </div>
            </div>
        </>
    )
}
export default Blog;